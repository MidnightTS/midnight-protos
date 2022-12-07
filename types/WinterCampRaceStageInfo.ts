// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WinterCampRaceStageInfo.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * @generated from protobuf message WinterCampRaceStageInfo
 */
export interface WinterCampRaceStageInfo {
    /**
     * @generated from protobuf field: uint32 id = 2;
     */
    id: number;
    /**
     * @generated from protobuf field: Vector pos = 6;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: uint32 open_time = 5;
     */
    openTime: number;
    /**
     * @generated from protobuf field: uint32 max_score = 4;
     */
    maxScore: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampRaceStageInfo$Type extends MessageType<WinterCampRaceStageInfo> {
    constructor() {
        super("WinterCampRaceStageInfo", [
            { no: 2, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "pos", kind: "message", T: () => Vector },
            { no: 5, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WinterCampRaceStageInfo>): WinterCampRaceStageInfo {
        const message = { id: 0, openTime: 0, maxScore: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WinterCampRaceStageInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WinterCampRaceStageInfo): WinterCampRaceStageInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* Vector pos */ 6:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 open_time */ 5:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 max_score */ 4:
                    message.maxScore = reader.uint32();
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
    internalBinaryWrite(message: WinterCampRaceStageInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 id = 2; */
        if (message.id !== 0)
            writer.tag(2, WireType.Varint).uint32(message.id);
        /* Vector pos = 6; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 open_time = 5; */
        if (message.openTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.openTime);
        /* uint32 max_score = 4; */
        if (message.maxScore !== 0)
            writer.tag(4, WireType.Varint).uint32(message.maxScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampRaceStageInfo
 */
export const WinterCampRaceStageInfo = new WinterCampRaceStageInfo$Type();