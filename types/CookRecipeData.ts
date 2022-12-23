// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CookRecipeData.proto" (syntax proto3)
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
 * @generated from protobuf message CookRecipeData
 */
export interface CookRecipeData {
    /**
     * @generated from protobuf field: uint32 proficiency = 8;
     */
    proficiency: number;
    /**
     * @generated from protobuf field: uint32 recipe_id = 14;
     */
    recipeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CookRecipeData$Type extends MessageType<CookRecipeData> {
    constructor() {
        super("CookRecipeData", [
            { no: 8, name: "proficiency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "recipe_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CookRecipeData>): CookRecipeData {
        const message = { proficiency: 0, recipeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CookRecipeData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CookRecipeData): CookRecipeData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 proficiency */ 8:
                    message.proficiency = reader.uint32();
                    break;
                case /* uint32 recipe_id */ 14:
                    message.recipeId = reader.uint32();
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
    internalBinaryWrite(message: CookRecipeData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 proficiency = 8; */
        if (message.proficiency !== 0)
            writer.tag(8, WireType.Varint).uint32(message.proficiency);
        /* uint32 recipe_id = 14; */
        if (message.recipeId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.recipeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CookRecipeData
 */
export const CookRecipeData = new CookRecipeData$Type();
