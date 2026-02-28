"use client";

import React, { useState, useEffect } from "react";
import { X, Award, Maximize2, ChevronDown, ChevronUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Certificate } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

const getIcon = (iconName: string, colorClass?: string) => {
  const IconComponent = (LucideIcons as any)[iconName] || Award;
  const color = colorClass || "text-purple-400";
  return <IconComponent className={`w-6 h-6 ${color}`} />;
};

const CertificateModal = ({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
              {getIcon(certificate.iconName, certificate.colorClass)}
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white leading-tight line-clamp-1">
                {certificate.title}
              </h2>
              <p className="text-sm text-gray-400">{certificate.issuer}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 bg-slate-950/50 flex items-center justify-center flex-1 overflow-hidden min-h-[300px]">
          {certificate.imagePath ? (
            <img
              src={certificate.imagePath}
              alt={certificate.title}
              loading="lazy"
              className="max-w-full max-h-full rounded-lg shadow-lg object-contain border border-slate-800"
            />
          ) : (
            <div className="text-gray-500 flex flex-col items-center">
              <Award className="w-16 h-16 mb-4 opacity-20" />
              <p>Image not available</p>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Certificates({
  mainCertificates,
  otherCertificates,
}: {
  mainCertificates: Certificate[];
  otherCertificates: Certificate[];
}) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showOther, setShowOther] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  const Card = ({ cert, index }: { cert: Certificate; index: number }) => (
    <div
      onClick={() => setSelectedCert(cert)}
      className={`group relative p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer flex flex-col h-full transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
          {getIcon(cert.iconName, cert.colorClass)}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-slate-800 rounded-full text-purple-400">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors pr-4 line-clamp-2">
        {cert.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{cert.issuer}</p>

      <div className="pt-4 border-t border-slate-800/50 flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-500 font-mono">
          Issued: {cert.date}
        </span>
        <span className="text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
          Lihat Sertifikat →
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="certificates"
      className="py-24 bg-slate-950 relative"
      ref={ref}
    >
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-section ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications & Awards
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validating skills and academic achievements from various trusted
            platforms. Click on a card to view the certificate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCertificates.map((cert, index) => (
            <Card key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {otherCertificates.length > 0 && (
          <div className="flex flex-col items-center mt-12">
            <button
              onClick={() => setShowOther(!showOther)}
              className="group flex items-center gap-2 px-8 py-3 bg-slate-900 border border-slate-700 hover:border-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-purple-500/20 z-20"
            >
              <span>
                {showOther
                  ? "Hide Other Certifications"
                  : "View Other Certifications"}
              </span>
              {showOther ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              )}
            </button>

            <div
              className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out overflow-hidden ${
                showOther
                  ? "max-h-[2000px] opacity-100 mt-10"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              {otherCertificates.map((cert) => (
                <Card key={cert.id} cert={cert} index={0} />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
