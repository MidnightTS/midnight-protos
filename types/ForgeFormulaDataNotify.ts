// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ForgeFormulaDataNotify.proto" (syntax proto3)
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
 *   CMD_ID = 626;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ForgeFormulaDataNotify
 */
export interface ForgeFormulaDataNotify {
    /**
     * @generated from protobuf field: bool is_locked = 4;
     */
    isLocked: boolean;
    /**
     * @generated from protobuf field: uint32 forge_id = 3;
     */
    forgeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ForgeFormulaDataNotify$Type extends MessageType<ForgeFormulaDataNotify> {
    constructor() {
        super("ForgeFormulaDataNotify", [
            { no: 4, name: "is_locked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "forge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ForgeFormulaDataNotify>): ForgeFormulaDataNotify {
        const message = { isLocked: false, forgeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ForgeFormulaDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ForgeFormulaDataNotify): ForgeFormulaDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_locked */ 4:
                    message.isLocked = reader.bool();
                    break;
                case /* uint32 forge_id */ 3:
                    message.forgeId = reader.uint32();
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
    internalBinaryWrite(message: ForgeFormulaDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_locked = 4; */
        if (message.isLocked !== false)
            writer.tag(4, WireType.Varint).bool(message.isLocked);
        /* uint32 forge_id = 3; */
        if (message.forgeId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.forgeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeFormulaDataNotify
 */
export const ForgeFormulaDataNotify = new ForgeFormulaDataNotify$Type();
