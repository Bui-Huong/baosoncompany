import React, {useEffect, useState} from 'react';
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import {withStyles,makeStyles} from "@mui/styles";
import clsx from "clsx";
import MasterService from "../service/master.service.jsx";
// Custom connector style
const CustomConnector = withStyles({
    root:{
        '-webkit-flex':'1 1 auto!important',
        '-ms-flex': '1 1 auto!important',
        'flex': '1 1 auto!important',
        position: 'absolute!important',
        top: '12px!important',
        left:'calc(-50% + 10px)!important',
        right:'calc(50% + 10px)!important',
    },
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            borderColor: '#DCAB27',
            borderWidth:'2px'
        },
    },
    completed: {
        '& $line': {
            borderColor: '#DCAB27',
            borderWidth:'2px'
        },
    },
    line: {
        borderColor: '#e0e0e0',
        borderTopWidth: '2px',
        borderWidth:'1px',
    },
})(StepConnector);

const useStepIconStyles = makeStyles({
    root: {
        color: '#e0e0e0', // default icon color
        display: 'flex',
        height: 26,
        alignItems: 'center',
    },
    active: {
        color: '#DCAB27', // active icon color
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#DCAB27', // completed icon color
        zIndex: 1,
        fontSize: 30,
    },
});

function StepIcon(props) {
    const classes = useStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ?<CheckCircleIcon  className={classes.completed} /> :active? <CheckCircleIcon   className={classes.completed} />: <CircleIcon style={{width:20,height:20}} className={classes.circle} />}
        </div>
    );
}

function CustomStepper({data}) {
    const [dataList,setDataList] = useState([
        // {label:'Tạo hợp đồng',id:0,code:'draft'},
        // {label:'Đang thực hiện',id:1,code:'processing'},
        // {label:'Đã thanh lý',id:2,code:'terminated'}
    ]);
    const [listStatus,setListStatus] = useState([
    ]);
    const dataList1= [];
    useEffect(()=>{
        MasterService.getListStatusCv().then(
            (data) => {
                setListStatus(data?.data?.result);
            },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data && !Array.isArray(error.response.data.detail) &&
                        error.response.data.detail) ||
                    (error.response &&
                        error.response.data && Array.isArray(error.response.data.detail) &&
                        error.response.data.detail[0].msg)||
                    error.message ||
                    error.toString();
                console.log(message,error);
            });
    },[])
    useEffect(()=>{
        console.log("listStatus",listStatus);
        if(listStatus.length>0) {
            listStatus.map((i, key) => {

                dataList1.push({label: i.displayCode, id: key, code: i.value})
                console.log(dataList1)
            })
            setDataList(dataList1)
        }
    },[listStatus])
    return (
        <Stepper alternativeLabel activeStep={dataList.filter(x=>x.code == data)?.[0]?.id} connector={<CustomConnector />}>
            {dataList.map(({label,id,code}) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={StepIcon} sx={{color:code ==data?'#DCAB27':'#5C5C5C'}}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}

export default CustomStepper;
