// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "StartArenaChallengeLevelReq.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2196;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message StartArenaChallengeLevelReq
 */
export interface StartArenaChallengeLevelReq {
    /**
     * @generated from protobuf field: uint32 Unk3300_FDFNFLAKONG = 13 [json_name = "Unk3300FDFNFLAKONG"];
     */
    unk3300FDFNFLAKONG: number;
    /**
     * @generated from protobuf field: uint32 gadget_entity_id = 3;
     */
    gadgetEntityId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_DBHAGHMMLAI = 12 [json_name = "Unk3300DBHAGHMMLAI"];
     */
    unk3300DBHAGHMMLAI: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class StartArenaChallengeLevelReq$Type extends MessageType<StartArenaChallengeLevelReq> {
    constructor() {
        super("StartArenaChallengeLevelReq", [
            { no: 13, name: "Unk3300_FDFNFLAKONG", kind: "scalar", jsonName: "Unk3300FDFNFLAKONG", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_DBHAGHMMLAI", kind: "scalar", jsonName: "Unk3300DBHAGHMMLAI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<StartArenaChallengeLevelReq>): StartArenaChallengeLevelReq {
        const message = { unk3300FDFNFLAKONG: 0, gadgetEntityId: 0, unk3300DBHAGHMMLAI: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StartArenaChallengeLevelReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StartArenaChallengeLevelReq): StartArenaChallengeLevelReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_FDFNFLAKONG = 13 [json_name = "Unk3300FDFNFLAKONG"];*/ 13:
                    message.unk3300FDFNFLAKONG = reader.uint32();
                    break;
                case /* uint32 gadget_entity_id */ 3:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 Unk3300_DBHAGHMMLAI = 12 [json_name = "Unk3300DBHAGHMMLAI"];*/ 12:
                    message.unk3300DBHAGHMMLAI = reader.uint32();
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
    internalBinaryWrite(message: StartArenaChallengeLevelReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_FDFNFLAKONG = 13 [json_name = "Unk3300FDFNFLAKONG"]; */
        if (message.unk3300FDFNFLAKONG !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300FDFNFLAKONG);
        /* uint32 gadget_entity_id = 3; */
        if (message.gadgetEntityId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 Unk3300_DBHAGHMMLAI = 12 [json_name = "Unk3300DBHAGHMMLAI"]; */
        if (message.unk3300DBHAGHMMLAI !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300DBHAGHMMLAI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StartArenaChallengeLevelReq
 */
export const StartArenaChallengeLevelReq = new StartArenaChallengeLevelReq$Type();