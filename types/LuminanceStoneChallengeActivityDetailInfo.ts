// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "LuminanceStoneChallengeActivityDetailInfo.proto" (syntax proto3)
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
 * @generated from protobuf message LuminanceStoneChallengeActivityDetailInfo
 */
export interface LuminanceStoneChallengeActivityDetailInfo {
    /**
     * @generated from protobuf field: bool is_content_closed = 1;
     */
    isContentClosed: boolean;
    /**
     * @generated from protobuf field: uint32 current_stage_id = 2;
     */
    currentStageId: number;
    /**
     * @generated from protobuf field: bool is_final_gallery_complete = 7;
     */
    isFinalGalleryComplete: boolean;
    /**
     * @generated from protobuf field: uint32 best_score = 6;
     */
    bestScore: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class LuminanceStoneChallengeActivityDetailInfo$Type extends MessageType<LuminanceStoneChallengeActivityDetailInfo> {
    constructor() {
        super("LuminanceStoneChallengeActivityDetailInfo", [
            { no: 1, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "current_stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_final_gallery_complete", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<LuminanceStoneChallengeActivityDetailInfo>): LuminanceStoneChallengeActivityDetailInfo {
        const message = { isContentClosed: false, currentStageId: 0, isFinalGalleryComplete: false, bestScore: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LuminanceStoneChallengeActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LuminanceStoneChallengeActivityDetailInfo): LuminanceStoneChallengeActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_content_closed */ 1:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 current_stage_id */ 2:
                    message.currentStageId = reader.uint32();
                    break;
                case /* bool is_final_gallery_complete */ 7:
                    message.isFinalGalleryComplete = reader.bool();
                    break;
                case /* uint32 best_score */ 6:
                    message.bestScore = reader.uint32();
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
    internalBinaryWrite(message: LuminanceStoneChallengeActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_content_closed = 1; */
        if (message.isContentClosed !== false)
            writer.tag(1, WireType.Varint).bool(message.isContentClosed);
        /* uint32 current_stage_id = 2; */
        if (message.currentStageId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.currentStageId);
        /* bool is_final_gallery_complete = 7; */
        if (message.isFinalGalleryComplete !== false)
            writer.tag(7, WireType.Varint).bool(message.isFinalGalleryComplete);
        /* uint32 best_score = 6; */
        if (message.bestScore !== 0)
            writer.tag(6, WireType.Varint).uint32(message.bestScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LuminanceStoneChallengeActivityDetailInfo
 */
export const LuminanceStoneChallengeActivityDetailInfo = new LuminanceStoneChallengeActivityDetailInfo$Type();