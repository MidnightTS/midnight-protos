// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GravenInnocenceCarveStageInfo.proto" (syntax proto3)
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
 * @generated from protobuf message GravenInnocenceCarveStageInfo
 */
export interface GravenInnocenceCarveStageInfo {
    /**
     * @generated from protobuf field: bool is_open = 8;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: uint32 stage_id = 10;
     */
    stageId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocenceCarveStageInfo$Type extends MessageType<GravenInnocenceCarveStageInfo> {
    constructor() {
        super("GravenInnocenceCarveStageInfo", [
            { no: 8, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GravenInnocenceCarveStageInfo>): GravenInnocenceCarveStageInfo {
        const message = { isOpen: false, stageId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GravenInnocenceCarveStageInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GravenInnocenceCarveStageInfo): GravenInnocenceCarveStageInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_open */ 8:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 10:
                    message.stageId = reader.uint32();
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
    internalBinaryWrite(message: GravenInnocenceCarveStageInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_open = 8; */
        if (message.isOpen !== false)
            writer.tag(8, WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 10; */
        if (message.stageId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocenceCarveStageInfo
 */
export const GravenInnocenceCarveStageInfo = new GravenInnocenceCarveStageInfo$Type();
