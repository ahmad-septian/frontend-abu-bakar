import React, { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  AnimasiDialog,
  BootstrapDialog,
} from "@/component-global/component-dialog";

export default function EditAssessmentPeriod(props) {
  const {
    formDataUpdate,
    handleUpdateChange,
    ClickCloseEdit,
    openEdit,
    dataTahunAjaran,
    handleSubmitEdit,
  } = props;
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openEdit}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Edit Assessment Period
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseEdit}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Close />
      </IconButton>
      <DialogContent dividers>
        <div className="mb-3">
          <Typography>Type Assessment</Typography>
          <TextField
            name="assessmentTypes"
            fullWidth
            size="small"
            margin="dense"
            value={formDataUpdate.assessmentTypes}
            onChange={handleUpdateChange}
          />
        </div>

        <div className="mb-3">
          <Typography>Tanggal Mulai</Typography>
          <TextField
            name="startDate"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formDataUpdate.startDate}
            onChange={handleUpdateChange}
          />
        </div>

        <div className="mb-3">
          <Typography>Tanggal Selesai</Typography>
          <TextField
            name="endDate"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formDataUpdate.endDate}
            onChange={handleUpdateChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Tahun Ajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="tahunAjaranId"
              value={formDataUpdate.tahunAjaranId}
              onChange={handleUpdateChange}
            >
              {dataTahunAjaran.length > 0 ? (
                dataTahunAjaran.map((tahunAjaran) => (
                  <MenuItem key={tahunAjaran.id} value={tahunAjaran.id}>
                    {tahunAjaran.tahunAjaran}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Loading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>

        <FormControlLabel
          control={
            <Checkbox
              name="isLocked"
              checked={formDataUpdate.isLocked}
              onChange={handleUpdateChange}
            />
          }
          label={formDataUpdate.isLocked ? "Buka Penilaian?" : "Tutup Penilaian?"}
        />
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            backgroundColor: "#85193C",
          }}
          variant="contained"
          onClick={handleSubmitEdit}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
