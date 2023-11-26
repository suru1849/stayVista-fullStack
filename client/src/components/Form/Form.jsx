import { DateRange } from "react-date-range";
import { ImSpinner9 } from "react-icons/im";

const Form = ({
  handleSubmit,
  handleDates,
  dates,
  loading,
  uploadImageName,
  handleUploadImage,
}) => {
  return (
    <div className="bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
          {/* title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          {/* Image upload */}
          <div className="form-control p-5 border-4 border-dotted rounded-lg flex justify-center items-center bg-white">
            <label
              htmlFor="files"
              className="w-fit rounded-sm px-4 bg-red-400 font-bold text-lg text-white"
            >
              {uploadImageName}
            </label>
            <input
              id="files"
              onChange={(e) => handleUploadImage(e.target.files[0])}
              name="image"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              required
            />
          </div>
          {/* calender */}
          <div>
            <label className="label">
              <span className="label-text font-bold">
                Select Avaibality Range
              </span>
            </label>
            <div className="flex justify-center items-center">
              <DateRange
                ranges={[dates]}
                onChange={handleDates}
                minDate={new Date()}
                rangeColors={["#F43F5E"]}
                direction="vertical"
                showDateDisplay={false}
              />
            </div>
          </div>
          {/* info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            {/* Total guest */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Total Guest</span>
              </label>
              <input
                type="number"
                name="total_guest"
                placeholder="Total Guest"
                className="input input-bordered"
                required
              />
            </div>
            {/* Bedrooms */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Bedrooms</span>
              </label>
              <input
                type="number"
                name="bedrooms"
                placeholder="Bedrooms"
                className="input input-bordered"
                required
              />
            </div>
            {/* Bathrooms */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Bathrooms</span>
              </label>
              <input
                type="number"
                name="bathrooms"
                placeholder="Bathrooms"
                className="input input-bordered"
                required
              />
            </div>
            {/* Description */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <textarea name="description" rows={5}></textarea>
            </div>
          </div>
        </div>
        <div className="p-5 my-10">
          <button className="btn w-full bg-red-300" type="submit">
            {loading ? (
              <ImSpinner9 className="animate-spin mx-auto" />
            ) : (
              "Save & Continue"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
