import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Reason } from 'pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/present" element={<Home />} />
            <Route path="/present/reason/:id" element={<Reason />} />
            <Route path="*" element={<Navigate to="/present" replace />} />
        </Routes>
    );
};
