// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TreasureMapRegionInfoNotify.proto" (syntax proto3)
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
import { TreasureMapRegionInfo } from "./TreasureMapRegionInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2179;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TreasureMapRegionInfoNotify
 */
export interface TreasureMapRegionInfoNotify {
    /**
     * @generated from protobuf field: TreasureMapRegionInfo region_info = 7;
     */
    regionInfo?: TreasureMapRegionInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapRegionInfoNotify$Type extends MessageType<TreasureMapRegionInfoNotify> {
    constructor() {
        super("TreasureMapRegionInfoNotify", [
            { no: 7, name: "region_info", kind: "message", T: () => TreasureMapRegionInfo }
        ]);
    }
    create(value?: PartialMessage<TreasureMapRegionInfoNotify>): TreasureMapRegionInfoNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TreasureMapRegionInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TreasureMapRegionInfoNotify): TreasureMapRegionInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* TreasureMapRegionInfo region_info */ 7:
                    message.regionInfo = TreasureMapRegionInfo.internalBinaryRead(reader, reader.uint32(), options, message.regionInfo);
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
    internalBinaryWrite(message: TreasureMapRegionInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* TreasureMapRegionInfo region_info = 7; */
        if (message.regionInfo)
            TreasureMapRegionInfo.internalBinaryWrite(message.regionInfo, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapRegionInfoNotify
 */
export const TreasureMapRegionInfoNotify = new TreasureMapRegionInfoNotify$Type();
