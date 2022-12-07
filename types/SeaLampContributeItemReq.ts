// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SeaLampContributeItemReq.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2133;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message SeaLampContributeItemReq
 */
export interface SeaLampContributeItemReq {
    /**
     * @generated from protobuf field: repeated ItemParam item_list = 11;
     */
    itemList: ItemParam[];
    /**
     * @generated from protobuf field: uint32 activity_id = 2;
     */
    activityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SeaLampContributeItemReq$Type extends MessageType<SeaLampContributeItemReq> {
    constructor() {
        super("SeaLampContributeItemReq", [
            { no: 11, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 2, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SeaLampContributeItemReq>): SeaLampContributeItemReq {
        const message = { itemList: [], activityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SeaLampContributeItemReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SeaLampContributeItemReq): SeaLampContributeItemReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ItemParam item_list */ 11:
                    message.itemList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 activity_id */ 2:
                    message.activityId = reader.uint32();
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
    internalBinaryWrite(message: SeaLampContributeItemReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ItemParam item_list = 11; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint32 activity_id = 2; */
        if (message.activityId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.activityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SeaLampContributeItemReq
 */
export const SeaLampContributeItemReq = new SeaLampContributeItemReq$Type();