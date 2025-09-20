"use client";

import { useState } from 'react';
import NetworkVisualization from './shared/NetworkVisualization';

export default function LongevityMapPro() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'LBF7') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid access code');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <NetworkVisualization isPro={true} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Longevity Map Pro</h2>
          <p className="text-white/70 text-sm">Enter your exclusive access code to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
              Access Code
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              placeholder="Enter access code"
              required
            />
            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Access Pro Version
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/50 text-xs">
            Pro version includes information on connections and and exclusive insights
          </p>
        </div>
      </div>
    </div>
  );
}
