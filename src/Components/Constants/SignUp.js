import { Create, Email, Person } from "@mui/icons-material";

export const STEPS = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
];

export const ICONS = {
    1: <Create />,
    2: <Person />,
    3: <Email />,
};

export const GENDER = [
    { gender: 'male', label: "Male" },
    { gender: 'female', label: "Female" },
    { gender: 'not_defined', label: "Other" },
]