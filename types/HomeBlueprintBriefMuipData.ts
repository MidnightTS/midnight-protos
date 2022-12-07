// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeBlueprintBriefMuipData.proto" (syntax proto3)
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
 * @generated from protobuf message HomeBlueprintBriefMuipData
 */
export interface HomeBlueprintBriefMuipData {
    /**
     * @generated from protobuf field: string share_code = 1;
     */
    shareCode: string;
    /**
     * @generated from protobuf field: uint32 owner_uid = 2;
     */
    ownerUid: number;
    /**
     * @generated from protobuf field: uint32 module_id = 3;
     */
    moduleId: number;
    /**
     * @generated from protobuf field: uint32 scene_id = 4;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 block_id = 5;
     */
    blockId: number;
    /**
     * @generated from protobuf field: bool is_allow_copy = 6;
     */
    isAllowCopy: boolean;
    /**
     * @generated from protobuf field: uint32 create_time = 7;
     */
    createTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintBriefMuipData$Type extends MessageType<HomeBlueprintBriefMuipData> {
    constructor() {
        super("HomeBlueprintBriefMuipData", [
            { no: 1, name: "share_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_allow_copy", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "create_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeBlueprintBriefMuipData>): HomeBlueprintBriefMuipData {
        const message = { shareCode: "", ownerUid: 0, moduleId: 0, sceneId: 0, blockId: 0, isAllowCopy: false, createTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeBlueprintBriefMuipData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeBlueprintBriefMuipData): HomeBlueprintBriefMuipData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string share_code */ 1:
                    message.shareCode = reader.string();
                    break;
                case /* uint32 owner_uid */ 2:
                    message.ownerUid = reader.uint32();
                    break;
                case /* uint32 module_id */ 3:
                    message.moduleId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 block_id */ 5:
                    message.blockId = reader.uint32();
                    break;
                case /* bool is_allow_copy */ 6:
                    message.isAllowCopy = reader.bool();
                    break;
                case /* uint32 create_time */ 7:
                    message.createTime = reader.uint32();
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
    internalBinaryWrite(message: HomeBlueprintBriefMuipData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string share_code = 1; */
        if (message.shareCode !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.shareCode);
        /* uint32 owner_uid = 2; */
        if (message.ownerUid !== 0)
            writer.tag(2, WireType.Varint).uint32(message.ownerUid);
        /* uint32 module_id = 3; */
        if (message.moduleId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.moduleId);
        /* uint32 scene_id = 4; */
        if (message.sceneId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.sceneId);
        /* uint32 block_id = 5; */
        if (message.blockId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.blockId);
        /* bool is_allow_copy = 6; */
        if (message.isAllowCopy !== false)
            writer.tag(6, WireType.Varint).bool(message.isAllowCopy);
        /* uint32 create_time = 7; */
        if (message.createTime !== 0)
            writer.tag(7, WireType.Varint).uint32(message.createTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlueprintBriefMuipData
 */
export const HomeBlueprintBriefMuipData = new HomeBlueprintBriefMuipData$Type();
