import { useTranslation } from "react-i18next";

import Select from "react-select";

import theme from "../../styles/theme";

import UsFlag from "../../assets/us-flag.svg";
import BrFlag from "../../assets/br-flag.svg";

export function LangSelect() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedOption) => {
    changeLanguage(selectedOption.value);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme.COLORS.COAL,
      height: "41px",
      border: "1px solid #fff",
      borderRadius: "8px",
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.COLORS.WHITE,
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme.COLORS.COAL,
    }),
    option: (provided) => ({
      ...provided,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "none",
      ":active": {
        ...provided[":active"],
        backgroundColor: "none",
      },
      ":hover": {
        ...provided[":active"],
        backgroundColor: "none",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme.COLORS.WHITE,
      "&:hover": {
        color: theme.COLORS.GRAY,
      },
    }),
  };

  const langOptions = [
    {
      value: "pt-BR",
      label: <img src={BrFlag} alt="BR Flag" width="28" />,
    },
    {
      value: "en-US",
      label: <img src={UsFlag} alt="US Flag" width="28" />,
    },
  ];

  return (
    <Select
      options={langOptions}
      defaultValue={langOptions.find((option) => option.value == i18n.language)}
      onChange={handleLanguageChange}
      styles={customStyles}
    />
  );
}
