import DashboardStats from "../../components/adminPage/Dashboard/DashboardStats";
import QuickActions from "../../components/adminPage/Dashboard/QuickActions";
import DepartmentCards from "../../components/adminPage/Dashboard/DepartmentCards";
import HospitalStatus from "../../components/adminPage/Dashboard/HospitalStatus";
import PatientTable from "../../components/adminPage/Table/PatientTable";
import DoctorTable from "../../components/adminPage/Table/DoctorTable";
import AppointmentTable from "../../components/adminPage/Table/AppointnmentTable";

const Dashboard = () => {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    Hospital Dashboard
                </h1>

                <p className="text-slate-500 mt-2">
                    Welcome Back Admin 👋
                </p>
            </div>

            <DashboardStats />
            <div className="mt-8">
                <QuickActions />
            </div>

            <div className="grid xl:grid-cols-2 gap-8 mt-8">
                <DepartmentCards />
                <HospitalStatus />
            </div>

            <div className="grid xl:grid-cols-2 gap-8 mt-8">
                <PatientTable />
                <DoctorTable />
            </div>

            <div className="mt-8">
                <AppointmentTable />
            </div>
        </>
    );
};

export default Dashboard;