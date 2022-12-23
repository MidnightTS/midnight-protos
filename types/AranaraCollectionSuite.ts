// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AranaraCollectionSuite.proto" (syntax proto3)
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
import { AranaraCollectionState } from "./AranaraCollectionState";
/**
 * @generated from protobuf message AranaraCollectionSuite
 */
export interface AranaraCollectionSuite {
    /**
     * @generated from protobuf field: map<uint32, AranaraCollectionState> collection_id_state_map = 5;
     */
    collectionIdStateMap: {
        [key: number]: AranaraCollectionState;
    };
    /**
     * @generated from protobuf field: uint32 collection_type = 12;
     */
    collectionType: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AranaraCollectionSuite$Type extends MessageType<AranaraCollectionSuite> {
    constructor() {
        super("AranaraCollectionSuite", [
            { no: 5, name: "collection_id_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["AranaraCollectionState", AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] } },
            { no: 12, name: "collection_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AranaraCollectionSuite>): AranaraCollectionSuite {
        const message = { collectionIdStateMap: {}, collectionType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AranaraCollectionSuite>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AranaraCollectionSuite): AranaraCollectionSuite {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, AranaraCollectionState> collection_id_state_map */ 5:
                    this.binaryReadMap5(message.collectionIdStateMap, reader, options);
                    break;
                case /* uint32 collection_type */ 12:
                    message.collectionType = reader.uint32();
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
    private binaryReadMap5(map: AranaraCollectionSuite["collectionIdStateMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof AranaraCollectionSuite["collectionIdStateMap"] | undefined, val: AranaraCollectionSuite["collectionIdStateMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AranaraCollectionSuite.collection_id_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: AranaraCollectionSuite, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, AranaraCollectionState> collection_id_state_map = 5; */
        for (let k of Object.keys(message.collectionIdStateMap))
            writer.tag(5, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).int32(message.collectionIdStateMap[k as any]).join();
        /* uint32 collection_type = 12; */
        if (message.collectionType !== 0)
            writer.tag(12, WireType.Varint).uint32(message.collectionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AranaraCollectionSuite
 */
export const AranaraCollectionSuite = new AranaraCollectionSuite$Type();
