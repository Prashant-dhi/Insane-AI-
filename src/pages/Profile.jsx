import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Camera,
  User,
  Mail,
  Crown,
  Pencil,
  Save,
  X,
  Moon,
  Bell,
  Globe,
  Shield,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";

import { auth, db } from "../firebase/firebase";

import { uploadImage } from "../services/cloudinary";

import {
  loadProfile,
  saveProfile,
} from "../services/profile";

import {
  logoutUser,
  deleteCurrentUser,
} from "../services/auth";

import {
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Profile() {

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    avatar:
      "",
    plan: "Premium",
  });

  const handleLogout = async () => {
    try {
      await logoutUser();

      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };



  const handleSave = async () => {
    try {
      let avatar = previewImage;

      if (
        fileInputRef.current?.files?.length
      ) {
        avatar = await uploadImage(
          fileInputRef.current.files[0]
        );
      }

      await saveProfile({
        ...profile,
        avatar,
      });

      setProfile((prev) => ({
        ...prev,
        avatar,
      }));

      setPreviewImage(avatar);

      setEditing(false);

      alert("Profile updated successfully.");
    } catch (err) {
      console.error(err);

      alert(err.message);
    }
  };


  const handleDeleteAccount = async () => {
    const ok = window.confirm(
      "Delete your account permanently?"
    );

    if (!ok) return;

    try {
      const uid = auth.currentUser.uid;

      await deleteDoc(doc(db, "users", uid));

      await deleteCurrentUser();

      navigate("/signup");
    } catch (err) {
      alert(err.message);
    }
  };
  const [previewImage, setPreviewImage] = useState(profile.avatar);

  useEffect(() => {
    async function getProfile() {
      const data = await loadProfile();

      if (!data) return;

      setProfile({
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        plan: "Free",
      });

      setPreviewImage(data.avatar);
    }

    getProfile();
  }, []);

  const preferences = [
    {
      title: "Dark Mode",
      subtitle: "Use dark appearance",
      icon: Moon,
    },
    {
      title: "Notifications",
      subtitle: "Receive important alerts",
      icon: Bell,
    },
    {
      title: "Language",
      subtitle: "English",
      icon: Globe,
    },
    {
      title: "Security",
      subtitle: "Password & Login",
      icon: Shield,
    },
  ];

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreviewImage(url);

    // Part-4 me Supabase upload karenge.
  };

  const handleInput = (e) => {

    setProfile({

      ...profile,

      [e.target.name]: e.target.value,

    });

  };

  return (

    <div className="min-h-screen bg-[#0A0A0A] text-white">

      <div className="mx-auto max-w-5xl px-6 py-10">

        <motion.div

          initial={{ opacity: 0, y: 25 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: .35 }}

          className="rounded-3xl border border-[#232323] bg-[#0F0F0F] p-8"

        >

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}

            <div className="relative">

              <img

                src={previewImage}

                alt="profile"

                className="w-32 h-32 rounded-full object-cover border-2 border-[#2c2c2c]"

              />

              <input

                type="file"

                accept="image/*"

                ref={fileInputRef}

                onChange={handleImageChange}

                className="hidden"

              />

              <button

                onClick={handleImageClick}

                className="absolute bottom-0 right-0 w-10 h-10 rounded-full  bg-red-600 text-black flex items-center justify-center hover:scale-105 transition"

              >

                <Camera size={18} />

              </button>

            </div>

            {/* Right */}

            <div className="flex-1 w-full">


              <div className="flex items-center justify-between flex-wrap gap-4">

                <div>

                  <h1 className="text-3xl font-semibold">

                    {profile.name}

                  </h1>

                  <p className="text-gray-400 mt-1">

                    {profile.email}

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-medium flex items-center gap-2">

                    <Crown size={15} />

                    {profile.plan}

                  </span>

                  <button

                    onClick={() => setEditing(!editing)}

                    className="w-11 h-11 rounded-xl border border-[#2a2a2a] hover:bg-[#1a1a1a] flex items-center justify-center"

                  >

                    <Pencil size={18} />

                  </button>

                </div>

              </div>
              {/* ================= EDIT PROFILE ================= */}

              {editing && (

                <motion.div

                  initial={{ opacity: 0, y: 20 }}

                  animate={{ opacity: 1, y: 0 }}

                  className="mt-8 rounded-2xl border border-[#232323] bg-[#111111] p-6"

                >

                  <h2 className="text-xl font-semibold mb-6">

                    Edit Profile

                  </h2>

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label className="text-sm text-gray-400">

                        Full Name

                      </label>

                      <input

                        type="text"

                        name="name"

                        value={profile.name}

                        onChange={handleInput}

                        className="mt-2 w-full rounded-xl border border-[#2a2a2a] bg-[#151515]px-4 py-3 outline-none focus:border-white"

                      />

                    </div>

                    <div>

                      <label className="text-sm text-gray-400">

                        Email Address

                      </label>

                      <input

                        type="email"

                        name="email"

                        value={profile.email}

                        onChange={handleInput}

                        className="mt-2 w-full rounded-xl border border-[#2a2a2a] bg-[#181818] px-4 py-3 outline-none focus:border-white"

                      />

                    </div>

                  </div>

                  <div className="mt-6 flex gap-4">

                    <button
                      onClick={handleSave}
                      className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-red-600
    text-white
    px-5
    py-3
    font-medium
    hover:scale-105
    transition
  "
                    >
                      <Save size={18} />
                      Save Changes
                    </button>
                    <button

                      onClick={() => setEditing(false)}

                      className="flex items-center gap-2 rounded-xl border border-[#2a2a2a] px-5 py-3 hover:bg-[#181818] transition"

                    >

                      <X size={18} />

                      Cancel

                    </button>

                  </div>

                </motion.div>

              )}

              {/* ================= STATS ================= */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

                {[
                  {
                    title: "Chats",
                    value: "248",
                  },
                  {
                    title: "Storage",
                    value: "1.8 GB",
                  },
                  {
                    title: "Joined",
                    value: "2026",
                  },
                  {
                    title: "Status",
                    value: "Premium",
                  },
                ].map((item, index) => (

                  <motion.div

                    key={index}

                    whileHover={{ y: -4 }}

                    className="rounded-2xl border border-[#252525] bg-[#111111] p-5"

                  >

                    <p className="text-gray-400 text-sm">

                      {item.title}

                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">

                      {item.value}

                    </h2>

                  </motion.div>

                ))}

              </div>

              {/* ================= ACCOUNT ================= */}

              <div className="mt-8 rounded-2xl border border-[#232323] bg-[#111111] p-6">

                <h2 className="text-xl font-semibold mb-6">

                  Account

                </h2>

                <div className="space-y-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <User size={20} />

                      <div>

                        <p className="text-sm text-gray-400">

                          Name

                        </p>

                        <p>

                          {profile.name}

                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <Mail size={20} />

                      <div>

                        <p className="text-sm text-gray-400">

                          Email

                        </p>

                        <p>

                          {profile.email}

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================= PREFERENCES ================= */}

              <div className="mt-8 rounded-2xl border border-[#232323] bg-[#111111] p-6">

                <h2 className="text-xl font-semibold mb-6">
                  Preferences
                </h2>

                <div className="space-y-3">

                  {preferences.map((item, index) => {

                    const Icon = item.icon;

                    return (

                      <button
                        key={index}
                        className="
          w-full
          flex
          items-center
          justify-between
          rounded-xl
          border
          border-[#232323]
          bg-[#181818]
          px-5
          py-4
         hover:bg-[#1C1C1C]
          hover:border-[#333]
          transition
          "
                      >

                        <div className="flex items-center gap-4">

                          <div
                            className="
              w-11
              h-11
              rounded-xl
              bg-[#202020]
              flex
              items-center
              justify-center
              "
                          >

                            <Icon size={18} />

                          </div>

                          <div className="text-left">

                            <p className="font-medium">
                              {item.title}
                            </p>

                            <p className="text-sm text-gray-500">
                              {item.subtitle}
                            </p>

                          </div>

                        </div>

                        <ChevronRight
                          size={18}
                          className="text-gray-500"
                        />

                      </button>

                    );

                  })}

                </div>

              </div>

              {/* ================= SUBSCRIPTION ================= */}

              <div className="mt-8 rounded-2xl border border-[#232323] bg-[#111111] p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-xl font-semibold">
                      Subscription
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Your current AI plan
                    </p>

                  </div>

                  <span
                    className="
      rounded-full
     bg-red-600
      text-white
      px-4
      py-2
      text-sm
      font-medium
      "
                  >
                    {profile.plan}
                  </span>

                </div>

                <button
                  className="
    mt-6
    w-full
    rounded-xl
   bg-red-600
    text-white
    py-3
    font-semibold
    hover:scale-[1.01]
    transition
    "
                >
                  Manage Subscription
                </button>

              </div>

              {/* ================= DANGER ZONE ================= */}

              <div className="mt-8 rounded-2xl border border-red-900/40 bg-[#111111] p-6">

                <h2 className="text-xl font-semibold text-red-400">
                  Account
                </h2>

                <div className="mt-6 space-y-3">

                  <button
                    onClick={handleLogout}
                    className="
      w-full
      flex
      items-center
      justify-between
      rounded-xl
      border
      border-[#232323]
      bg-[#181818]
      px-5
      py-4
      hover:border-red-600
      transition
      "
                  >
                    <div className="flex items-center gap-3">
                      <LogOut size={18} />
                      Logout
                    </div>

                    <ChevronRight size={18} />
                  </button>

                  <button
                    onClick={handleDeleteAccount}
                    className="
      w-full
      flex
      items-center
      justify-between
      rounded-xl
      border
      border-red-900/40
      bg-[#151515]
      px-5
      py-4
      text-red-400
      hover:bg-red-950/40
      transition
      "
                  >
                    <div className="flex items-center gap-3">
                      <Trash2 size={18} />
                      Delete Account
                    </div>

                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>

              {/* Close Right Side */}
            </div>

            {/* Close Flex */}
          </div>

          {/* Close Motion */}
        </motion.div>

        {/* Close Container */}
      </div>

      {/* Close Screen */}
    </div>

  );
}