'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useFadeIn } from '@/hooks/useFadeIn';
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function WaiverForm() {
  useFadeIn();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    athleteName: '',
    athleteAge: '',
    athleteGrade: '',
    athletePosition: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyRelationship: '',
    medicalConditions: '',
    ageGroup: 'younger',
    agreedToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#1a1a2e';
  }, []);

  const getPos = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  }, []);

  const startDraw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setIsDrawing(true);
    setHasSigned(true);
  }, [getPos]);

  const draw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }, [isDrawing, getPos]);

  const endDraw = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!hasSigned) {
      setError('Please sign the waiver before submitting.');
      return;
    }
    if (!form.agreedToTerms) {
      setError('Please agree to the waiver terms before submitting.');
      return;
    }

    setSubmitting(true);

    try {
      const canvas = canvasRef.current;
      const signatureData = canvas?.toDataURL('image/png') || '';

      const response = await fetch('https://formspree.io/f/mgvzzkrj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Spring Break Camp Waiver - ${form.athleteName}`,
          'Athlete Name': form.athleteName,
          'Athlete Age': form.athleteAge,
          'Athlete Grade': form.athleteGrade,
          'Athlete Position': form.athletePosition,
          'Age Group': form.ageGroup === 'younger' ? 'Younger (Grades 3-6) - $50' : 'Older (Grades 7-12) - $65',
          'Parent/Guardian Name': form.parentName,
          'Parent/Guardian Email': form.parentEmail,
          'Parent/Guardian Phone': form.parentPhone,
          'Emergency Contact': form.emergencyContactName,
          'Emergency Phone': form.emergencyContactPhone,
          'Emergency Relationship': form.emergencyRelationship,
          'Medical Conditions': form.medicalConditions || 'None',
          'Waiver Agreed': 'Yes',
          'Signed By': form.parentName,
          'Signed On Behalf Of': form.athleteName,
          'Signature': 'Signed digitally (image attached below)',
          'Signature Image': signatureData,
          'Submitted At': new Date().toLocaleString(),
          '--- FULL WAIVER TEXT ---': [
            'ASSUMPTION OF RISK & WAIVER OF LIABILITY',
            '',
            `I, ${form.parentName}, the undersigned parent or legal guardian of ${form.athleteName} (the "Athlete"), hereby acknowledge and agree to the following in consideration of the Athlete's participation in C.L.I.M.B. Athletics Spring Break Camp ("the Camp"):`,
            '',
            '1. Assumption of Risk: I understand that participation in football training, speed and agility drills, and other athletic activities involves inherent risks including, but not limited to, sprains, fractures, concussions, heat-related illness, and other injuries. I voluntarily assume all such risks on behalf of the Athlete.',
            '',
            '2. Waiver & Release: I hereby release, discharge, and hold harmless C.L.I.M.B. Athletics, its coaches, staff, volunteers, and affiliates from any and all claims, demands, actions, or causes of action arising out of or related to any loss, damage, or injury, including death, that may be sustained by the Athlete during or in connection with participation in the Camp.',
            '',
            '3. Medical Authorization: In the event of an emergency, I authorize C.L.I.M.B. Athletics staff to seek and consent to medical treatment for the Athlete if I cannot be reached in a timely manner. I agree to be responsible for all medical expenses incurred on behalf of the Athlete.',
            '',
            '4. Photo/Video Release: I grant C.L.I.M.B. Athletics permission to use photographs, video recordings, and/or audio recordings of the Athlete taken during the Camp for promotional, marketing, and educational purposes without compensation.',
            '',
            '5. Code of Conduct: I understand that the Athlete is expected to follow all camp rules, listen to coaches, and demonstrate sportsmanship at all times. C.L.I.M.B. Athletics reserves the right to dismiss any participant whose behavior is deemed unsafe or disruptive, without refund.',
            '',
            'I have read and fully understand this waiver and release. I sign it voluntarily and acknowledge that no oral representations, statements, or inducements apart from the foregoing written agreement have been made.',
            '',
            `Signed: ${form.parentName}`,
            `Date: ${new Date().toLocaleDateString()}`,
          ].join('\n'),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg w-full text-center bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-3">
            Registration Complete!
          </h2>
          <p className="text-gray-500 mb-6">
            Your waiver has been submitted successfully. You&apos;ll receive a confirmation at <strong>{form.parentEmail}</strong>.
          </p>
          <div className="bg-neutral rounded-xl p-5 mb-6 text-left">
            <h3 className="font-heading font-bold text-accent text-sm mb-2">Next Steps:</h3>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">1.</span>
                Complete payment through our Square booking system
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">2.</span>
                Check your email for camp details and location info
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">3.</span>
                Come ready to train — bring water and proper athletic gear
              </li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://climb-athletics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-md text-sm"
            >
              Complete Payment on Square
            </a>
            <Link
              href="/spring-break-camps"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-accent px-6 py-3 rounded-xl font-bold hover:border-primary hover:text-primary transition-colors text-sm"
            >
              Back to Camp Info
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral">
      {/* Header */}
      <section className="bg-accent pt-20 pb-10 sm:pt-24 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <Link
            href="/spring-break-camps"
            className="inline-flex items-center gap-1 text-white/50 hover:text-primary text-sm font-medium transition-colors mb-6"
          >
            <ChevronRightIcon className="w-3.5 h-3.5 rotate-180" />
            Back to Spring Break Camps
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-3">
            Camp Registration &amp; <span className="text-primary">Waiver</span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Complete the form below to register your athlete and sign the required liability waiver for Spring Break Camp 2026.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Athlete Information */}
            <div className="fade-in bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-accent mb-6 pb-3 border-b border-gray-100">
                Athlete Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="athleteName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Athlete Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="athleteName"
                    name="athleteName"
                    required
                    value={form.athleteName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter athlete's full name"
                  />
                </div>
                <div>
                  <label htmlFor="athleteAge" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="athleteAge"
                    name="athleteAge"
                    required
                    min="6"
                    max="18"
                    value={form.athleteAge}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Age"
                  />
                </div>
                <div>
                  <label htmlFor="athleteGrade" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Grade <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="athleteGrade"
                    name="athleteGrade"
                    required
                    value={form.athleteGrade}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select grade</option>
                    {['3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map((g) => (
                      <option key={g} value={g}>{g} Grade</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="athletePosition" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Position(s) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="athletePosition"
                    name="athletePosition"
                    required
                    value={form.athletePosition}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="e.g. QB, WR, RB"
                  />
                </div>
                <div>
                  <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Age Group <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    required
                    value={form.ageGroup}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="younger">Younger — Grades 3-6 ($50)</option>
                    <option value="older">Older — Grades 7-12 ($65)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="fade-in bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-accent mb-6 pb-3 border-b border-gray-100">
                Parent / Guardian Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Parent/Guardian Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={form.parentName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="parentEmail"
                    name="parentEmail"
                    required
                    value={form.parentEmail}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="parentPhone"
                    name="parentPhone"
                    required
                    value={form.parentPhone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="fade-in bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-accent mb-6 pb-3 border-b border-gray-100">
                Emergency Contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Emergency Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    required
                    value={form.emergencyContactName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Emergency Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    required
                    value={form.emergencyContactPhone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label htmlFor="emergencyRelationship" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Relationship to Athlete <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="emergencyRelationship"
                    name="emergencyRelationship"
                    required
                    value={form.emergencyRelationship}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="e.g. Parent, Aunt, Coach"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Medical Conditions / Allergies
                  </label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    rows={3}
                    value={form.medicalConditions}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-accent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="List any medical conditions, allergies, or relevant health info (leave blank if none)"
                  />
                </div>
              </div>
            </div>

            {/* Waiver Agreement */}
            <div className="fade-in bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-heading font-bold text-accent mb-6 pb-3 border-b border-gray-100">
                Liability Waiver &amp; Release
              </h2>

              <div className="bg-neutral rounded-xl p-4 sm:p-5 mb-6 max-h-48 overflow-y-auto text-xs text-gray-600 leading-relaxed space-y-3">
                <p>
                  <strong>ASSUMPTION OF RISK &amp; WAIVER OF LIABILITY</strong>
                </p>
                <p>
                  I, the undersigned parent or legal guardian of the above-named participant (the &quot;Athlete&quot;),
                  hereby acknowledge and agree to the following in consideration of the Athlete&apos;s participation
                  in C.L.I.M.B. Athletics Spring Break Camp (&quot;the Camp&quot;):
                </p>
                <p>
                  <strong>1. Assumption of Risk:</strong> I understand that participation in football training,
                  speed and agility drills, and other athletic activities involves inherent risks including,
                  but not limited to, sprains, fractures, concussions, heat-related illness, and other
                  injuries. I voluntarily assume all such risks on behalf of the Athlete.
                </p>
                <p>
                  <strong>2. Waiver &amp; Release:</strong> I hereby release, discharge, and hold harmless
                  C.L.I.M.B. Athletics, its coaches, staff, volunteers, and affiliates from any and all
                  claims, demands, actions, or causes of action arising out of or related to any loss,
                  damage, or injury, including death, that may be sustained by the Athlete during or in
                  connection with participation in the Camp.
                </p>
                <p>
                  <strong>3. Medical Authorization:</strong> In the event of an emergency, I authorize
                  C.L.I.M.B. Athletics staff to seek and consent to medical treatment for the Athlete
                  if I cannot be reached in a timely manner. I agree to be responsible for all medical
                  expenses incurred on behalf of the Athlete.
                </p>
                <p>
                  <strong>4. Photo/Video Release:</strong> I grant C.L.I.M.B. Athletics permission to
                  use photographs, video recordings, and/or audio recordings of the Athlete taken during
                  the Camp for promotional, marketing, and educational purposes without compensation.
                </p>
                <p>
                  <strong>5. Code of Conduct:</strong> I understand that the Athlete is expected to follow
                  all camp rules, listen to coaches, and demonstrate sportsmanship at all times.
                  C.L.I.M.B. Athletics reserves the right to dismiss any participant whose behavior
                  is deemed unsafe or disruptive, without refund.
                </p>
                <p>
                  I have read and fully understand this waiver and release. I sign it voluntarily and
                  acknowledge that no oral representations, statements, or inducements apart from the
                  foregoing written agreement have been made.
                </p>
              </div>

              {/* Agreement Checkbox */}
              <label className="flex items-start gap-3 mb-6 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={form.agreedToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/50"
                />
                <span className="text-sm text-gray-700">
                  I have read and agree to the Liability Waiver &amp; Release above. I am the parent or legal guardian of the athlete named in this registration. <span className="text-red-500">*</span>
                </span>
              </label>

              {/* Signature Canvas */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent/Guardian Signature <span className="text-red-500">*</span>
                </label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-xl overflow-hidden bg-white">
                  <canvas
                    ref={canvasRef}
                    className="w-full touch-none cursor-crosshair"
                    style={{ height: '160px' }}
                    onMouseDown={startDraw}
                    onMouseMove={draw}
                    onMouseUp={endDraw}
                    onMouseLeave={endDraw}
                    onTouchStart={startDraw}
                    onTouchMove={draw}
                    onTouchEnd={endDraw}
                  />
                  {!hasSigned && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <p className="text-gray-300 text-sm">Sign here</p>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={clearSignature}
                  className="mt-2 text-xs text-gray-400 hover:text-primary transition-colors font-medium"
                >
                  Clear Signature
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="fade-in text-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration &amp; Waiver
                    <ChevronRightIcon className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-gray-400 text-xs mt-4">
                By submitting, you agree to the waiver terms above. You&apos;ll receive a confirmation email.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
