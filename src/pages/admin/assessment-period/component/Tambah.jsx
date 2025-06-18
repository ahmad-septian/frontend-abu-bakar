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
  OutlinedInput,
  Box,
  Chip,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {} from "react-router-dom";
import {
  AnimasiDialog,
  BootstrapDialog,
} from "@/component-global/component-dialog";

export default function TambahAssessmentPeriod(props) {
  const {
    openTambah,
    ClickCloseTambah,
    formDataCreate,
    handleCreateChange,
    handleSubmitCreate,
    dataTahunAjaran,
  } = props;

  const options = ["kuis", "tugas", "uts", "uas"];
  return (
    <BootstrapDialog
      sx={{ backdropFilter: "blur(8px)" }}
      aria-labelledby="customized-dialog-title"
      open={openTambah}
      slots={{
        transition: AnimasiDialog,
      }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Tambah Assessment Period
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={ClickCloseTambah}
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
          <FormControl fullWidth margin="dense" size="small">
            <Select
              labelId="assessment-types-label"
              id="assessment-types"
              multiple
              name="assessmentTypes"
              value={formDataCreate.assessmentTypes}
              onChange={handleCreateChange}
              input={<OutlinedInput />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="mb-3">
          <Typography>Tanggal Mulai</Typography>
          <TextField
            name="startDate"
            fullWidth
            size="small"
            margin="dense"
            type="date"
            value={formDataCreate.startDate}
            onChange={handleCreateChange}
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
            value={formDataCreate.endDate}
            onChange={handleCreateChange}
          />
        </div>
        <div className="mb-3">
          <Typography>Tahun Ajaran</Typography>
          <FormControl fullWidth margin="dense" size="small">
            <Select
              name="tahunAjaranId"
              value={formDataCreate.tahunAjaranId}
              onChange={handleCreateChange}
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
              checked={formDataCreate.isLocked}
              onChange={handleCreateChange}
            />
          }
          label={
            formDataCreate.isLocked ? "Tutup Penilaian?" : "Buka Penilaian?"
          }
        />
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            backgroundColor: "#85193C",
          }}
          variant="contained"
          onClick={handleSubmitCreate}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
