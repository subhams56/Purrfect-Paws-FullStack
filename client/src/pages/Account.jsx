import Footer from "../components/Footer";


const Account = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
     

      {/* Profile section */}
      <section className="px-4 pt-8 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium leading-6 text-gray-900">My Account</h2>
              <p className="max-w-2xl mt-1 text-sm text-gray-500">View and manage your account details.</p>
            </div>
            <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">john_doe123</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">johndoe@example.com</dd>
                </div>
                {/* Add more profile fields as needed */}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer className="mt-auto"/>
    </div>
  );
};

export default Account;
