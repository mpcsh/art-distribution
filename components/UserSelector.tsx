import { User } from "@prisma/client";
import { SyntheticEvent, useState } from "react";

import {
	Autocomplete,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	TextField,
} from "@mui/material";

import { SetState } from "../lib/constants";

type UserSelectorProps = {
	users: User[];
	setUser: SetState<User | null>;
};

export default function UserSelector({ users, setUser }: UserSelectorProps) {
	const [open, setOpen] = useState(true);

	function handleSelectUser(event: SyntheticEvent, value: User) {
		setUser(value);
		setOpen(false);
	}

	return (
		<Dialog open={open} fullWidth>
			<DialogContent>
				<DialogContentText>
					Please select your name. Let Harry know if you&apos;re not on the list.
				</DialogContentText>
				<DialogActions>
					<Autocomplete
						disableClearable
						autoHighlight
						fullWidth
						onChange={handleSelectUser}
						options={users}
						getOptionLabel={(user) => user.name}
						renderInput={(params) => <TextField {...params} label="Name" />}
					/>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);

	// return (
	// 	<FormControl>
	// 		<FormLabel htmlFor="userSelector">Please select your name.</FormLabel>
	// 		<AutoComplete openOnFocus={false} onChange={handleSelectUser}>
	// 			<AutoCompleteInput variant="filled" />
	// 			<AutoCompleteList>
	// 				{users.sort().map((item) => (
	// 					<AutoCompleteItem key={item.id} value={item.name}>
	// 						{item.name}
	// 					</AutoCompleteItem>
	// 				))}
	// 			</AutoCompleteList>
	// 		</AutoComplete>
	// 		<FormHelperText>If you do not see your name, send Harry a message.</FormHelperText>
	// 	</FormControl>
	// );
}
