// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SceneGalleryVintageHuntingInfo.proto" (syntax proto3)
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
import { VintageHuntingThirdStageInfo } from "./VintageHuntingThirdStageInfo";
import { VintageHuntingSecondStageInfo } from "./VintageHuntingSecondStageInfo";
import { VintageHuntingFirstStageInfo } from "./VintageHuntingFirstStageInfo";
/**
 * @generated from protobuf message SceneGalleryVintageHuntingInfo
 */
export interface SceneGalleryVintageHuntingInfo {
    /**
     * @generated from protobuf field: uint32 stage_id = 9;
     */
    stageId: number;
    /**
     * @generated from protobuf oneof: info
     */
    info: {
        oneofKind: "firstStageInfo";
        /**
         * @generated from protobuf field: VintageHuntingFirstStageInfo first_stage_info = 5;
         */
        firstStageInfo: VintageHuntingFirstStageInfo;
    } | {
        oneofKind: "secondStageInfo";
        /**
         * @generated from protobuf field: VintageHuntingSecondStageInfo second_stage_info = 14;
         */
        secondStageInfo: VintageHuntingSecondStageInfo;
    } | {
        oneofKind: "thirdStageInfo";
        /**
         * @generated from protobuf field: VintageHuntingThirdStageInfo third_stage_info = 8;
         */
        thirdStageInfo: VintageHuntingThirdStageInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryVintageHuntingInfo$Type extends MessageType<SceneGalleryVintageHuntingInfo> {
    constructor() {
        super("SceneGalleryVintageHuntingInfo", [
            { no: 9, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "first_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingFirstStageInfo },
            { no: 14, name: "second_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingSecondStageInfo },
            { no: 8, name: "third_stage_info", kind: "message", oneof: "info", T: () => VintageHuntingThirdStageInfo }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryVintageHuntingInfo>): SceneGalleryVintageHuntingInfo {
        const message = { stageId: 0, info: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryVintageHuntingInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryVintageHuntingInfo): SceneGalleryVintageHuntingInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 stage_id */ 9:
                    message.stageId = reader.uint32();
                    break;
                case /* VintageHuntingFirstStageInfo first_stage_info */ 5:
                    message.info = {
                        oneofKind: "firstStageInfo",
                        firstStageInfo: VintageHuntingFirstStageInfo.internalBinaryRead(reader, reader.uint32(), options, (message.info as any).firstStageInfo)
                    };
                    break;
                case /* VintageHuntingSecondStageInfo second_stage_info */ 14:
                    message.info = {
                        oneofKind: "secondStageInfo",
                        secondStageInfo: VintageHuntingSecondStageInfo.internalBinaryRead(reader, reader.uint32(), options, (message.info as any).secondStageInfo)
                    };
                    break;
                case /* VintageHuntingThirdStageInfo third_stage_info */ 8:
                    message.info = {
                        oneofKind: "thirdStageInfo",
                        thirdStageInfo: VintageHuntingThirdStageInfo.internalBinaryRead(reader, reader.uint32(), options, (message.info as any).thirdStageInfo)
                    };
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
    internalBinaryWrite(message: SceneGalleryVintageHuntingInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 stage_id = 9; */
        if (message.stageId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.stageId);
        /* VintageHuntingFirstStageInfo first_stage_info = 5; */
        if (message.info.oneofKind === "firstStageInfo")
            VintageHuntingFirstStageInfo.internalBinaryWrite(message.info.firstStageInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* VintageHuntingSecondStageInfo second_stage_info = 14; */
        if (message.info.oneofKind === "secondStageInfo")
            VintageHuntingSecondStageInfo.internalBinaryWrite(message.info.secondStageInfo, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* VintageHuntingThirdStageInfo third_stage_info = 8; */
        if (message.info.oneofKind === "thirdStageInfo")
            VintageHuntingThirdStageInfo.internalBinaryWrite(message.info.thirdStageInfo, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryVintageHuntingInfo
 */
export const SceneGalleryVintageHuntingInfo = new SceneGalleryVintageHuntingInfo$Type();