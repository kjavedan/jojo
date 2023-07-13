// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: "red",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderColor: "red",
          // Add your custom styles for the input
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderColor: "red",
          // Add your custom styles for the select
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[500],
          },
        },
      },
    },

    // Add overrides for other input components as needed
  };
}
