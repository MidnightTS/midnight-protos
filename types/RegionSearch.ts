// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RegionSearch.proto" (syntax proto3)
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
import { RegionSearchState } from "./RegionSearchState";
/**
 * @generated from protobuf message RegionSearch
 */
export interface RegionSearch {
    /**
     * @generated from protobuf field: RegionSearchState state = 2;
     */
    state: RegionSearchState;
    /**
     * @generated from protobuf field: bool is_entered = 6;
     */
    isEntered: boolean;
    /**
     * @generated from protobuf field: uint32 progress = 5;
     */
    progress: number;
    /**
     * @generated from protobuf field: uint32 region_search_id = 1;
     */
    regionSearchId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearch$Type extends MessageType<RegionSearch> {
    constructor() {
        super("RegionSearch", [
            { no: 2, name: "state", kind: "enum", T: () => ["RegionSearchState", RegionSearchState, "REGION_SEARCH_STATE_"] },
            { no: 6, name: "is_entered", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "region_search_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RegionSearch>): RegionSearch {
        const message = { state: 0, isEntered: false, progress: 0, regionSearchId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegionSearch>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegionSearch): RegionSearch {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* RegionSearchState state */ 2:
                    message.state = reader.int32();
                    break;
                case /* bool is_entered */ 6:
                    message.isEntered = reader.bool();
                    break;
                case /* uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 region_search_id */ 1:
                    message.regionSearchId = reader.uint32();
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
    internalBinaryWrite(message: RegionSearch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* RegionSearchState state = 2; */
        if (message.state !== 0)
            writer.tag(2, WireType.Varint).int32(message.state);
        /* bool is_entered = 6; */
        if (message.isEntered !== false)
            writer.tag(6, WireType.Varint).bool(message.isEntered);
        /* uint32 progress = 5; */
        if (message.progress !== 0)
            writer.tag(5, WireType.Varint).uint32(message.progress);
        /* uint32 region_search_id = 1; */
        if (message.regionSearchId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.regionSearchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionSearch
 */
export const RegionSearch = new RegionSearch$Type();
