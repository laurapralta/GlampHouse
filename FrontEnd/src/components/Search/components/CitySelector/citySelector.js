import Select, { components } from 'react-select';
import { useQuery } from 'react-query';
import { api } from '../../../../services/api';
import { MdLocationPin } from 'react-icons/md';
import styled from "../styles.module.scss";

const { Option } = components;
let options = [];

const colourStyles = {
    container: (props) => {
    },

    control: (props) => ({
        ...props,
        border: "0px solid #ffffff",
        borderColor: "#ffffff",
        boxShadow: "none",
        position: "static",
    }),

    menu: base => ({
        ...base,
        zIndex: 100,
        marginLeft: "-22px",
        marginTop: 5,
        boxShadow: "1px 3px 3px #cccccc"
    }),

    menuList: (styles) => ({
        ...styles,
        background: '#ffffff',
    }),

    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        background: isFocused
            ? '#FFFBE2'
            : isSelected ? '#ffffff' : undefined,
        zIndex: 1,
        color: isFocused
            ? '#263238'
            : isSelected ? '#263238' : undefined,
    }),
}

async function Options() {
    const { data, isSuccess } = useQuery("cities", async () => {
        const response = await api.get("/cities");
        return await response.data;
    });
    if (isSuccess) {
        options = data;
        options.map((option) => {
            option.value = option.name;
            option.label = option.name;
            option.cityId = + option.id;
            return 'null'
        })
    }
}



function CustomOption(props) {

    return (
        <Option {...props} className={`${styled.option} d-flex align-items-center mx-auto`}>
            <MdLocationPin size={28} color="#7d8182" className="me-2" />
            <div>
                <strong className="d-block">{props.data.name}</strong>
                <span className="fs-14">{props.data.country}</span>
            </div>
        </Option>
    )
}

export function CitySelector({ Controller, control }) {
    Options();
    return (
        <>
            <Controller
            control={control}
            name="cities"
            render={({ field: { onChange, name, ref } }) => (
                <div className="d-flex align-items-center w-100 bg-light rounded position-relative">
                    <MdLocationPin size={24} color="#7d8182" />
                    <Select
                        className={styled.react_select_container}
                        classNamePrefix="react-select"
                        placeholder="Proxima aventura en:"
                        inputRef={ref}
                        options={options}
                        value={options.find(c=> c.cityId === name)}
                        onChange={val => onChange(val.cityId)}
                        components={{
                            Option: CustomOption,
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null
                        }}
                        styles={colourStyles}
                    />
                </div>
            )} />
        </>
    )
}