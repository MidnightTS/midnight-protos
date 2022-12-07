// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SalvageChallengeInfo.proto" (syntax proto3)
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
import { SalvageScoreChallengeInfo } from "./SalvageScoreChallengeInfo";
import { SalvageBundleChallengeInfo } from "./SalvageBundleChallengeInfo";
/**
 * @generated from protobuf message SalvageChallengeInfo
 */
export interface SalvageChallengeInfo {
    /**
     * @generated from protobuf field: uint32 challenge_type = 11;
     */
    challengeType: number;
    /**
     * @generated from protobuf field: bool is_unlock = 14;
     */
    isUnlock: boolean;
    /**
     * @generated from protobuf oneof: challenge_detail
     */
    challengeDetail: {
        oneofKind: "bundleInfo";
        /**
         * @generated from protobuf field: SalvageBundleChallengeInfo bundle_info = 2;
         */
        bundleInfo: SalvageBundleChallengeInfo;
    } | {
        oneofKind: "scoreChallengeInfo";
        /**
         * @generated from protobuf field: SalvageScoreChallengeInfo score_challenge_info = 9;
         */
        scoreChallengeInfo: SalvageScoreChallengeInfo;
    } | {
        oneofKind: "bossChallengeId";
        /**
         * @generated from protobuf field: uint32 boss_challenge_id = 12;
         */
        bossChallengeId: number;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SalvageChallengeInfo$Type extends MessageType<SalvageChallengeInfo> {
    constructor() {
        super("SalvageChallengeInfo", [
            { no: 11, name: "challenge_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_unlock", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "bundle_info", kind: "message", oneof: "challengeDetail", T: () => SalvageBundleChallengeInfo },
            { no: 9, name: "score_challenge_info", kind: "message", oneof: "challengeDetail", T: () => SalvageScoreChallengeInfo },
            { no: 12, name: "boss_challenge_id", kind: "scalar", oneof: "challengeDetail", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SalvageChallengeInfo>): SalvageChallengeInfo {
        const message = { challengeType: 0, isUnlock: false, challengeDetail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SalvageChallengeInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SalvageChallengeInfo): SalvageChallengeInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 challenge_type */ 11:
                    message.challengeType = reader.uint32();
                    break;
                case /* bool is_unlock */ 14:
                    message.isUnlock = reader.bool();
                    break;
                case /* SalvageBundleChallengeInfo bundle_info */ 2:
                    message.challengeDetail = {
                        oneofKind: "bundleInfo",
                        bundleInfo: SalvageBundleChallengeInfo.internalBinaryRead(reader, reader.uint32(), options, (message.challengeDetail as any).bundleInfo)
                    };
                    break;
                case /* SalvageScoreChallengeInfo score_challenge_info */ 9:
                    message.challengeDetail = {
                        oneofKind: "scoreChallengeInfo",
                        scoreChallengeInfo: SalvageScoreChallengeInfo.internalBinaryRead(reader, reader.uint32(), options, (message.challengeDetail as any).scoreChallengeInfo)
                    };
                    break;
                case /* uint32 boss_challenge_id */ 12:
                    message.challengeDetail = {
                        oneofKind: "bossChallengeId",
                        bossChallengeId: reader.uint32()
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
    internalBinaryWrite(message: SalvageChallengeInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 challenge_type = 11; */
        if (message.challengeType !== 0)
            writer.tag(11, WireType.Varint).uint32(message.challengeType);
        /* bool is_unlock = 14; */
        if (message.isUnlock !== false)
            writer.tag(14, WireType.Varint).bool(message.isUnlock);
        /* SalvageBundleChallengeInfo bundle_info = 2; */
        if (message.challengeDetail.oneofKind === "bundleInfo")
            SalvageBundleChallengeInfo.internalBinaryWrite(message.challengeDetail.bundleInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* SalvageScoreChallengeInfo score_challenge_info = 9; */
        if (message.challengeDetail.oneofKind === "scoreChallengeInfo")
            SalvageScoreChallengeInfo.internalBinaryWrite(message.challengeDetail.scoreChallengeInfo, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* uint32 boss_challenge_id = 12; */
        if (message.challengeDetail.oneofKind === "bossChallengeId")
            writer.tag(12, WireType.Varint).uint32(message.challengeDetail.bossChallengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvageChallengeInfo
 */
export const SalvageChallengeInfo = new SalvageChallengeInfo$Type();