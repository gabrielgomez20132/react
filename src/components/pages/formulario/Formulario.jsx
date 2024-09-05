import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

import * as Yup from "yup";

import "./Formulario.css";

const Formulario = () => {
  // let valoresIniciales = {
  //   nombre: "",
  //   email: "",
  //   contraseña: ""
  // }

  // const enviarForm = (data) => {
  //   console.log(data);
  // };

  //const formik = useFormik({initialValues, onSubmit})
  //const { handleSubmit, handleChange, values, setFieldValue, errors } => esto es una desestructuracion
  const { handleSubmit, handleChange, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        nombre: "",
        email: "",
        contraseña: "",
      },

      validationSchema: Yup.object({
        nombre: Yup.string().required("Debes ingresar un nombre"),
        email: Yup.string().required("Debes ingresar un email"),
        contraseña: Yup.string().required("Debes ingresar una contraseña"),
      }),

      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de registro
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingres su nombre"
              // name="nombre"
              onChange={(e) => {
                setFieldValue("nombre", e.target.value);
              }}
              variant="outlined"
              fullWidth
              value={values.nombre}
              helperText={errors.nombre}
              error={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              label="Ingre su email..."
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              label="Ingrese su contraseña"
              variant="outlined"
              fullWidth
              name="contraseña"
              onChange={handleChange}
              value={values.contraseña}
              error={errors.contraseña}
              helperText={errors.contraseña}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;