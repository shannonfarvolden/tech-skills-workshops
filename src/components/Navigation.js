import React from 'react';

export default function Navigation() {
  return (
    <nav class="bg-gray-800 h-16">
      <div class="flex">
        <a
          href="/"
          class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Tech Skills Workshop
        </a>
        <a
          href="about-us"
          class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          About us
        </a>
      </div>
    </nav>
  );
}
