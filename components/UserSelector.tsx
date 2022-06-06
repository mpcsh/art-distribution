import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import {
	AutoComplete,
	AutoCompleteInput,
	AutoCompleteItem,
	AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { type User } from "@prisma/client";

import { SetState } from "../lib/constants";

type UserSelectorProps = {
	users: User[];
	setUser: SetState<User | null>;
};

export default function UserSelector({ users, setUser }: UserSelectorProps) {
	function handleSelectUser(name: string) {
		const user = users.find((u) => u.name === name);
		if (!user) {
			return;
		}
		setUser(user);
	}

	return (
		<FormControl>
			<FormLabel htmlFor="userSelector">Please select your name.</FormLabel>
			<AutoComplete openOnFocus={false} onChange={handleSelectUser}>
				<AutoCompleteInput variant="filled" />
				<AutoCompleteList>
					{users.sort().map((item) => (
						<AutoCompleteItem key={item.id} value={item.name}>
							{item.name}
						</AutoCompleteItem>
					))}
				</AutoCompleteList>
			</AutoComplete>
			<FormHelperText>If you do not see your name, send Harry a message.</FormHelperText>
		</FormControl>
	);
}
