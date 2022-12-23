// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EnterRogueDiaryDungeonReq.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RogueDiaryAvatar } from "./RogueDiaryAvatar";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8627;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EnterRogueDiaryDungeonReq
 */
export interface EnterRogueDiaryDungeonReq {
    /**
     * @generated from protobuf field: repeated uint32 chosen_card_list = 5;
     */
    chosenCardList: number[];
    /**
     * @generated from protobuf field: repeated RogueDiaryAvatar chosen_avatar_list = 9;
     */
    chosenAvatarList: RogueDiaryAvatar[];
}
// @generated message type with reflection information, may provide speed optimized methods
class EnterRogueDiaryDungeonReq$Type extends MessageType<EnterRogueDiaryDungeonReq> {
    constructor() {
        super("EnterRogueDiaryDungeonReq", [
            { no: 5, name: "chosen_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "chosen_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar }
        ]);
    }
    create(value?: PartialMessage<EnterRogueDiaryDungeonReq>): EnterRogueDiaryDungeonReq {
        const message = { chosenCardList: [], chosenAvatarList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterRogueDiaryDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterRogueDiaryDungeonReq): EnterRogueDiaryDungeonReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 chosen_card_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenCardList.push(reader.uint32());
                    else
                        message.chosenCardList.push(reader.uint32());
                    break;
                case /* repeated RogueDiaryAvatar chosen_avatar_list */ 9:
                    message.chosenAvatarList.push(RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EnterRogueDiaryDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 chosen_card_list = 5; */
        if (message.chosenCardList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenCardList.length; i++)
                writer.uint32(message.chosenCardList[i]);
            writer.join();
        }
        /* repeated RogueDiaryAvatar chosen_avatar_list = 9; */
        for (let i = 0; i < message.chosenAvatarList.length; i++)
            RogueDiaryAvatar.internalBinaryWrite(message.chosenAvatarList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterRogueDiaryDungeonReq
 */
export const EnterRogueDiaryDungeonReq = new EnterRogueDiaryDungeonReq$Type();
