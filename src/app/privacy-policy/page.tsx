const PrivacyPolicy = () => {
  return (
    <>
      <div className="w-[80%] m-auto py-20 text-white">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          handle your information when you use our AI Therapist App.
        </p>

        <h2 className="text-xl mt-5 font-semibold">Information Collection:</h2>
        <ul className="list-disc list-inside">
          <li>We do not save any personal information on our app.</li>
          <li>
            Third-party tools used within the app may collect and store messages
            and chat data.
          </li>
        </ul>

        <h2 className="text-xl mt-5 font-semibold">Use of Information:</h2>
        <ul className="list-disc list-inside">
          <li>
            Information collected by third-party tools is used to provide and
            enhance the therapy services.
          </li>
          <li>
            We do not share your personal information, as we do not store any.
          </li>
        </ul>

        <h2 className="text-xl mt-5 font-semibold">Data Security:</h2>
        <ul className="list-disc list-inside">
          <li>
            We use third-party tools that implement security measures to protect
            your data.
          </li>
          <li>
            While we do not save your data, please be aware that third-party
            tools may handle your data differently.
          </li>
        </ul>

        <h2 className="text-xl mt-5 font-semibold">Your Rights:</h2>
        <ul className="list-disc list-inside">
          <li>
            Since we do not store personal information, there is no data for you
            to access, modify, or delete on our end.
          </li>
          <li>
            You can discontinue use of the app at any time if you do not agree
            with third-party data handling practices.
          </li>
        </ul>

        <h2 className="text-xl mt-5 font-semibold">Contact Us:</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:pecullozie@gmail.com">pecullozie@gmail.com</a>.
        </p>

        <p className="font-bold italic mt-6">
          By using our app, you agree to the terms of this Privacy Policy and
          the data handling practices of third-party tools used within the app.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
