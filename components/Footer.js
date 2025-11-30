import React from 'react'

export default function Footer(){
  return (
      <footer className="pt-20 pb-10 text-center text-white/50 text-sm">

          {/* divide line */}
          <div className="mx-auto h-px w-40 bg-white/10 mb-6"></div>

          <p>You can also find me on</p>

          <div className="flex justify-center gap-6 mb-4 mt-2">
              <a
                  href="https://github.com/MinusOne-01"
                  target="_blank"
                  className="hover:text-white transition-colors"
              >
                  GitHub
              </a>

              <a
                  href="https://leetcode.com/u/minus-1/"
                  target="_blank"
                  className="hover:text-white transition-colors"
              >
                  LeetCode
              </a>

              <a
                  href="mailto:sgone2842@gmail.com"
                  className="hover:text-white transition-colors"
              >
                  Email
              </a>
          </div>
      </footer>
  )
}

