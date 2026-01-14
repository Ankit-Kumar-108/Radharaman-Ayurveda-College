import { CreateTeacher } from "@/app/actions/TeacherManagement/createTeacher"

type prop = {
  OnClose: () => void
}
export default function CreateTeacherPage({OnClose}: prop) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className=" flex justify-between">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Register New Teacher</h1>
      <button className="h-9 w-20 bg-red-500 hover:bg-red-600 transition-all duration-200 rounded-lg text-white" onClick={OnClose}>
       Close
      </button>
      </div>

      <form action={CreateTeacher} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* --- Personal Details --- */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Personal Details</h2>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" name="fullName" required className="w-full border p-2 rounded" placeholder="Enter Full Name" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input type="date" name="dateOfBirth" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select name="gender" required className="w-full border p-2 rounded bg-white">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Father's Name</label>
          <input type="text" name="fatherName" placeholder="Enter Father's Name" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mother's Name</label>
          <input type="text" name="motherName" placeholder="Enter Mother's Name" required className="w-full border p-2 rounded" />
        </div>

        {/* --- Contact Details --- */}
        <div className="md:col-span-2 mt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Contact Info</h2>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" placeholder="Enter E-Mail" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile No</label>
          <input type="tel" name="mobileNo" placeholder="Enter Mobile Number" required className="w-full border p-2 rounded" maxLength={10} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Whatsapp No (Optional)</label>
          <input type="tel" name="whatsappNo" placeholder="Enter WhatsApp Number" className="w-full border p-2 rounded" maxLength={10} />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Local Address</label>
          <textarea name="localAddress" placeholder="Enter Local Address" required className="w-full border p-2 rounded" rows={2} />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Permanent Address</label>
          <textarea name="permanentAddress" placeholder="Enter Permanent Address" required className="w-full border p-2 rounded" rows={2} />
        </div>

        {/* --- Professional & Documents --- */}
        <div className="md:col-span-2 mt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Professional & Documents</h2>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Highest Qualification</label>
          <input type="text" name="highestQualification" required className="w-full border p-2 rounded" placeholder="e.g. M.Tech, PhD" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <input type="text" name="experience" required className="w-full border p-2 rounded" placeholder="e.g. 5 Years" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Aadhar Number</label>
          <input type="text" name="aadharNo" placeholder="Enter Addhar NUmber" required className="w-full border p-2 rounded" maxLength={12} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Teacher Photo</label>
          <input type="file" name="photo" accept="image/*" required className="w-full border p-2 rounded bg-gray-50" />
        </div>

        {/* --- Submit Button --- */}
        <div className="md:col-span-2 mt-6">
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition">
            Create Teacher Profile
          </button>
        </div>

      </form>
    </div>
  )
}