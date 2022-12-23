// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RoguelikeRefreshCardCostUpdateNotify.proto" (syntax proto3)
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
 *   CMD_ID = 8210;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message RoguelikeRefreshCardCostUpdateNotify
 */
export interface RoguelikeRefreshCardCostUpdateNotify {
    /**
     * @generated from protobuf field: uint32 item_count = 13;
     */
    itemCount: number;
    /**
     * @generated from protobuf field: uint32 item_id = 15;
     */
    itemId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeRefreshCardCostUpdateNotify$Type extends MessageType<RoguelikeRefreshCardCostUpdateNotify> {
    constructor() {
        super("RoguelikeRefreshCardCostUpdateNotify", [
            { no: 13, name: "item_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RoguelikeRefreshCardCostUpdateNotify>): RoguelikeRefreshCardCostUpdateNotify {
        const message = { itemCount: 0, itemId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoguelikeRefreshCardCostUpdateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoguelikeRefreshCardCostUpdateNotify): RoguelikeRefreshCardCostUpdateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 item_count */ 13:
                    message.itemCount = reader.uint32();
                    break;
                case /* uint32 item_id */ 15:
                    message.itemId = reader.uint32();
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
    internalBinaryWrite(message: RoguelikeRefreshCardCostUpdateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 item_count = 13; */
        if (message.itemCount !== 0)
            writer.tag(13, WireType.Varint).uint32(message.itemCount);
        /* uint32 item_id = 15; */
        if (message.itemId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeRefreshCardCostUpdateNotify
 */
export const RoguelikeRefreshCardCostUpdateNotify = new RoguelikeRefreshCardCostUpdateNotify$Type();
