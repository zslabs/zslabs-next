import * as React from 'react'

const Analytics: React.FC = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-17637644-1"
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-17637644-1');
          `,
        }}
      />
    </>
  )
}

export default Analytics
