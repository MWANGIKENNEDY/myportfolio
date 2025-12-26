import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <p className="text-lg font-bold tracking-tight text-gradient">KM.</p>
          <p className="text-sm text-muted-foreground">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Kennedy Mwangi. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social links could be added here */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;