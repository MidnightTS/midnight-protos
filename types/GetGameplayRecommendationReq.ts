// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GetGameplayRecommendationReq.proto" (syntax proto3)
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
import { GameplayRecommendationElementReliquaryRequest } from "./GameplayRecommendationElementReliquaryRequest";
import { GameplayRecommendationReliquaryRequest } from "./GameplayRecommendationReliquaryRequest";
import { GameplayRecommendationSkillRequest } from "./GameplayRecommendationSkillRequest";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 155;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message GetGameplayRecommendationReq
 */
export interface GetGameplayRecommendationReq {
    /**
     * @generated from protobuf field: uint32 avatar_id = 6;
     */
    avatarId: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "skillRequest";
        /**
         * @generated from protobuf field: GameplayRecommendationSkillRequest skill_request = 1566;
         */
        skillRequest: GameplayRecommendationSkillRequest;
    } | {
        oneofKind: "reliquaryRequest";
        /**
         * @generated from protobuf field: GameplayRecommendationReliquaryRequest reliquary_request = 72;
         */
        reliquaryRequest: GameplayRecommendationReliquaryRequest;
    } | {
        oneofKind: "elementReliquaryRequest";
        /**
         * @generated from protobuf field: GameplayRecommendationElementReliquaryRequest element_reliquary_request = 867;
         */
        elementReliquaryRequest: GameplayRecommendationElementReliquaryRequest;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GetGameplayRecommendationReq$Type extends MessageType<GetGameplayRecommendationReq> {
    constructor() {
        super("GetGameplayRecommendationReq", [
            { no: 6, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1566, name: "skill_request", kind: "message", oneof: "detail", T: () => GameplayRecommendationSkillRequest },
            { no: 72, name: "reliquary_request", kind: "message", oneof: "detail", T: () => GameplayRecommendationReliquaryRequest },
            { no: 867, name: "element_reliquary_request", kind: "message", oneof: "detail", T: () => GameplayRecommendationElementReliquaryRequest }
        ]);
    }
    create(value?: PartialMessage<GetGameplayRecommendationReq>): GetGameplayRecommendationReq {
        const message = { avatarId: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetGameplayRecommendationReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetGameplayRecommendationReq): GetGameplayRecommendationReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 avatar_id */ 6:
                    message.avatarId = reader.uint32();
                    break;
                case /* GameplayRecommendationSkillRequest skill_request */ 1566:
                    message.detail = {
                        oneofKind: "skillRequest",
                        skillRequest: GameplayRecommendationSkillRequest.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).skillRequest)
                    };
                    break;
                case /* GameplayRecommendationReliquaryRequest reliquary_request */ 72:
                    message.detail = {
                        oneofKind: "reliquaryRequest",
                        reliquaryRequest: GameplayRecommendationReliquaryRequest.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).reliquaryRequest)
                    };
                    break;
                case /* GameplayRecommendationElementReliquaryRequest element_reliquary_request */ 867:
                    message.detail = {
                        oneofKind: "elementReliquaryRequest",
                        elementReliquaryRequest: GameplayRecommendationElementReliquaryRequest.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).elementReliquaryRequest)
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
    internalBinaryWrite(message: GetGameplayRecommendationReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 avatar_id = 6; */
        if (message.avatarId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.avatarId);
        /* GameplayRecommendationSkillRequest skill_request = 1566; */
        if (message.detail.oneofKind === "skillRequest")
            GameplayRecommendationSkillRequest.internalBinaryWrite(message.detail.skillRequest, writer.tag(1566, WireType.LengthDelimited).fork(), options).join();
        /* GameplayRecommendationReliquaryRequest reliquary_request = 72; */
        if (message.detail.oneofKind === "reliquaryRequest")
            GameplayRecommendationReliquaryRequest.internalBinaryWrite(message.detail.reliquaryRequest, writer.tag(72, WireType.LengthDelimited).fork(), options).join();
        /* GameplayRecommendationElementReliquaryRequest element_reliquary_request = 867; */
        if (message.detail.oneofKind === "elementReliquaryRequest")
            GameplayRecommendationElementReliquaryRequest.internalBinaryWrite(message.detail.elementReliquaryRequest, writer.tag(867, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetGameplayRecommendationReq
 */
export const GetGameplayRecommendationReq = new GetGameplayRecommendationReq$Type();
