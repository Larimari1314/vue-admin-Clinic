import axios from 'axios' //----------------------------注意这个地方--axios
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
let base = 'http://localhost:8080';

export const requestLogin = params => {
    return axios.post(`/login`, params).then(res => res.data);
};

export const findByName = params => {
    return axios.get(`${base}/patient/findByNamePatient`, {params: params})
};

export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};

export const getUserListPage = params => {
    return axios.get(`${base}/patient/findAllPatient`, {params: params});
};

export const removeUser = params => {
    return axios.get(`${base}/patient/removePatientById`, {params: params});
};

export const batchRemovePatient = params => {
    return axios.get(`${base}/patient/batchRemovePatient`, {params: params});
};


export const addPatient = params => {
    return axios.post(`${base}/patient/addPatient`, params);
};
export const editPatient = params => {
    return axios.post(`${base}/patient/editPatient`, params);
};
export const exportData = params => {
    return axios.post(`${base}/patient/exportData`, "", {responseType: 'blob'});
};
export const templateDownload = params => {
    return axios.post(`${base}/patient/dataTemplateDownload`, "", {responseType: 'blob'});
};
export const analyseFile = params => {
    return axios.get(`${base}/patient/analyseFile`);
};

//doctor
export const DoctorFindByName = params => {
    return axios.get(`${base}/doctor/findByNameDoctor`, {params: params})
};

export const getDoctorListPage = params => {
    return axios.get(`${base}/doctor/findAllDoctor`, {params: params});
};

export const removeDoctor = params => {
    return axios.get(`${base}/doctor/removeDoctorById`, {params: params});
};

export const batchRemoveDoctor = params => {
    return axios.get(`${base}/doctor/batchRemoveDoctor`, {params: params});
};

export const addDoctor = params => {
    return axios.post(`${base}/doctor/addDoctor`, params);
};
export const editDoctor = params => {
    return axios.post(`${base}/doctor/editDoctor`, params);
};
export const exportDataDoctor = params => {
    return axios.post(`${base}/doctor/exportData`, "", {responseType: 'blob'});
};
export const templateDownloadDoctor = params => {
    return axios.post(`${base}/doctor/dataTemplateDownload`, "", {responseType: 'blob'});
};
export const analyseFileDoctor = params => {
    return axios.get(`${base}/doctor/analyseFile`);
};

//科室
export const findAllDepartment = params => {
    return axios.get(`${base}/department/findAllDepartment`);
};
export const findDepartmentDoctor = params => {
    return axios.post(`${base}/department/findDepartmentDoctor`, {params : params});
};

//诊所
export const drugFindByName = params => {
    return axios.get(`${base}/drug/findByNameDrug`, {params: params})
};

export const getDrugListPage = params => {
    return axios.get(`${base}/drug/findAllDrug`, {params: params});
};

export const addDrug = params => {
    return axios.post(`${base}/drug/addDrug`, params);
};
export const editDrug = params => {
    return axios.post(`${base}/drug/editDrug`, params);
};
export const exportDataDrug = params => {
    return axios.post(`${base}/drug/exportData`, "", {responseType: 'blob'});
};
export const templateDownloadDrug = params => {
    return axios.post(`${base}/drug/dataTemplateDownload`, "", {responseType: 'blob'});
};
export const analyseFileDrug = params => {
    return axios.get(`${base}/drug/analyseFile`);
};
export const exitDrugExhibit = params => {
    return axios.post(`${base}/drug/exitDrugExhibit`,params);
};