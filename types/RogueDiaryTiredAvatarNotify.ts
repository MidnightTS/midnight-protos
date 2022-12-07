// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "RogueDiaryTiredAvatarNotify.proto" (syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RogueDiaryAvatar } from "./RogueDiaryAvatar";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8660;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message RogueDiaryTiredAvatarNotify
 */
export interface RogueDiaryTiredAvatarNotify {
    /**
     * @generated from protobuf field: uint32 Unk3300_DMEMBBPEIGK = 1 [json_name = "Unk3300DMEMBBPEIGK"];
     */
    unk3300DMEMBBPEIGK: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_BGEJGLBMFII = 14 [json_name = "Unk3300BGEJGLBMFII"];
     */
    unk3300BGEJGLBMFII: number;
    /**
     * @generated from protobuf field: bool is_need_show = 11;
     */
    isNeedShow: boolean;
    /**
     * @generated from protobuf field: repeated RogueDiaryAvatar optional_tired_avatar_list = 5;
     */
    optionalTiredAvatarList: RogueDiaryAvatar[];
}
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryTiredAvatarNotify$Type extends MessageType<RogueDiaryTiredAvatarNotify> {
    constructor() {
        super("RogueDiaryTiredAvatarNotify", [
            { no: 1, name: "Unk3300_DMEMBBPEIGK", kind: "scalar", jsonName: "Unk3300DMEMBBPEIGK", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_BGEJGLBMFII", kind: "scalar", jsonName: "Unk3300BGEJGLBMFII", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_need_show", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "optional_tired_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar }
        ]);
    }
    create(value?: PartialMessage<RogueDiaryTiredAvatarNotify>): RogueDiaryTiredAvatarNotify {
        const message = { unk3300DMEMBBPEIGK: 0, unk3300BGEJGLBMFII: 0, isNeedShow: false, optionalTiredAvatarList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RogueDiaryTiredAvatarNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueDiaryTiredAvatarNotify): RogueDiaryTiredAvatarNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_DMEMBBPEIGK = 1 [json_name = "Unk3300DMEMBBPEIGK"];*/ 1:
                    message.unk3300DMEMBBPEIGK = reader.uint32();
                    break;
                case /* uint32 Unk3300_BGEJGLBMFII = 14 [json_name = "Unk3300BGEJGLBMFII"];*/ 14:
                    message.unk3300BGEJGLBMFII = reader.uint32();
                    break;
                case /* bool is_need_show */ 11:
                    message.isNeedShow = reader.bool();
                    break;
                case /* repeated RogueDiaryAvatar optional_tired_avatar_list */ 5:
                    message.optionalTiredAvatarList.push(RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RogueDiaryTiredAvatarNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_DMEMBBPEIGK = 1 [json_name = "Unk3300DMEMBBPEIGK"]; */
        if (message.unk3300DMEMBBPEIGK !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300DMEMBBPEIGK);
        /* uint32 Unk3300_BGEJGLBMFII = 14 [json_name = "Unk3300BGEJGLBMFII"]; */
        if (message.unk3300BGEJGLBMFII !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300BGEJGLBMFII);
        /* bool is_need_show = 11; */
        if (message.isNeedShow !== false)
            writer.tag(11, WireType.Varint).bool(message.isNeedShow);
        /* repeated RogueDiaryAvatar optional_tired_avatar_list = 5; */
        for (let i = 0; i < message.optionalTiredAvatarList.length; i++)
            RogueDiaryAvatar.internalBinaryWrite(message.optionalTiredAvatarList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryTiredAvatarNotify
 */
export const RogueDiaryTiredAvatarNotify = new RogueDiaryTiredAvatarNotify$Type();
