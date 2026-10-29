const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-3 w-3/4 lg:w-2/4 mx-auto mb-8 sm:mb-10 lg:mb-12">
      <p className="text-yellow-600">--- {subHeading} ---</p>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-400 p-2 border-y-2 border-gray-300">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
