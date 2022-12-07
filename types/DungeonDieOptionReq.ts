// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DungeonDieOptionReq.proto" (syntax proto3)
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
import { PlayerDieOption } from "./PlayerDieOption";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 939;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message DungeonDieOptionReq
 */
export interface DungeonDieOptionReq {
    /**
     * @generated from protobuf field: PlayerDieOption die_option = 5;
     */
    dieOption: PlayerDieOption;
    /**
     * @generated from protobuf field: bool is_quit_immediately = 14;
     */
    isQuitImmediately: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class DungeonDieOptionReq$Type extends MessageType<DungeonDieOptionReq> {
    constructor() {
        super("DungeonDieOptionReq", [
            { no: 5, name: "die_option", kind: "enum", T: () => ["PlayerDieOption", PlayerDieOption, "PLAYER_DIE_OPTION_"] },
            { no: 14, name: "is_quit_immediately", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<DungeonDieOptionReq>): DungeonDieOptionReq {
        const message = { dieOption: 0, isQuitImmediately: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DungeonDieOptionReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DungeonDieOptionReq): DungeonDieOptionReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* PlayerDieOption die_option */ 5:
                    message.dieOption = reader.int32();
                    break;
                case /* bool is_quit_immediately */ 14:
                    message.isQuitImmediately = reader.bool();
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
    internalBinaryWrite(message: DungeonDieOptionReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* PlayerDieOption die_option = 5; */
        if (message.dieOption !== 0)
            writer.tag(5, WireType.Varint).int32(message.dieOption);
        /* bool is_quit_immediately = 14; */
        if (message.isQuitImmediately !== false)
            writer.tag(14, WireType.Varint).bool(message.isQuitImmediately);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonDieOptionReq
 */
export const DungeonDieOptionReq = new DungeonDieOptionReq$Type();
