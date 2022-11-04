// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "CellInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
//
// MidnightTS - But it's coming down, no sound, it's all around.
// Copyright (C) 2022 - MidnightTS Team.
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
import { SceneSurfaceMaterial } from "./SceneSurfaceMaterial";
/**
 * @generated from protobuf message com.midnights.game.CellInfo
 */
export interface CellInfo {
    /**
     * @generated from protobuf field: optional com.midnights.game.SceneSurfaceMaterial type = 1;
     */
    type?: SceneSurfaceMaterial;
    /**
     * @generated from protobuf field: optional int32 y = 2;
     */
    y?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CellInfo$Type extends MessageType<CellInfo> {
    constructor() {
        super("com.midnights.game.CellInfo", [
            { no: 1, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.SceneSurfaceMaterial", SceneSurfaceMaterial] },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CellInfo>): CellInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CellInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CellInfo): CellInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.SceneSurfaceMaterial type */ 1:
                    message.type = reader.int32();
                    break;
                case /* optional int32 y */ 2:
                    message.y = reader.int32();
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
    internalBinaryWrite(message: CellInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional com.midnights.game.SceneSurfaceMaterial type = 1; */
        if (message.type !== undefined)
            writer.tag(1, WireType.Varint).int32(message.type);
        /* optional int32 y = 2; */
        if (message.y !== undefined)
            writer.tag(2, WireType.Varint).int32(message.y);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CellInfo
 */
export const CellInfo = new CellInfo$Type();
