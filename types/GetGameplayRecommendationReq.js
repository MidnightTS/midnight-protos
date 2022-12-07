"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGameplayRecommendationReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GameplayRecommendationElementReliquaryRequest_1 = require("./GameplayRecommendationElementReliquaryRequest");
const GameplayRecommendationReliquaryRequest_1 = require("./GameplayRecommendationReliquaryRequest");
const GameplayRecommendationSkillRequest_1 = require("./GameplayRecommendationSkillRequest");
// @generated message type with reflection information, may provide speed optimized methods
class GetGameplayRecommendationReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetGameplayRecommendationReq", [
            { no: 6, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1566, name: "skill_request", kind: "message", oneof: "detail", T: () => GameplayRecommendationSkillRequest_1.GameplayRecommendationSkillRequest },
            { no: 72, name: "reliquary_request", kind: "message", oneof: "detail", T: () => GameplayRecommendationReliquaryRequest_1.GameplayRecommendationReliquaryRequest },
            { no: 867, name: "element_reliquary_request", kind: "message", oneof: "detail", T: () => GameplayRecommendationElementReliquaryRequest_1.GameplayRecommendationElementReliquaryRequest }
        ]);
    }
    create(value) {
        const message = { avatarId: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                        skillRequest: GameplayRecommendationSkillRequest_1.GameplayRecommendationSkillRequest.internalBinaryRead(reader, reader.uint32(), options, message.detail.skillRequest)
                    };
                    break;
                case /* GameplayRecommendationReliquaryRequest reliquary_request */ 72:
                    message.detail = {
                        oneofKind: "reliquaryRequest",
                        reliquaryRequest: GameplayRecommendationReliquaryRequest_1.GameplayRecommendationReliquaryRequest.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquaryRequest)
                    };
                    break;
                case /* GameplayRecommendationElementReliquaryRequest element_reliquary_request */ 867:
                    message.detail = {
                        oneofKind: "elementReliquaryRequest",
                        elementReliquaryRequest: GameplayRecommendationElementReliquaryRequest_1.GameplayRecommendationElementReliquaryRequest.internalBinaryRead(reader, reader.uint32(), options, message.detail.elementReliquaryRequest)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 avatar_id = 6; */
        if (message.avatarId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* GameplayRecommendationSkillRequest skill_request = 1566; */
        if (message.detail.oneofKind === "skillRequest")
            GameplayRecommendationSkillRequest_1.GameplayRecommendationSkillRequest.internalBinaryWrite(message.detail.skillRequest, writer.tag(1566, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GameplayRecommendationReliquaryRequest reliquary_request = 72; */
        if (message.detail.oneofKind === "reliquaryRequest")
            GameplayRecommendationReliquaryRequest_1.GameplayRecommendationReliquaryRequest.internalBinaryWrite(message.detail.reliquaryRequest, writer.tag(72, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GameplayRecommendationElementReliquaryRequest element_reliquary_request = 867; */
        if (message.detail.oneofKind === "elementReliquaryRequest")
            GameplayRecommendationElementReliquaryRequest_1.GameplayRecommendationElementReliquaryRequest.internalBinaryWrite(message.detail.elementReliquaryRequest, writer.tag(867, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetGameplayRecommendationReq
 */
exports.GetGameplayRecommendationReq = new GetGameplayRecommendationReq$Type();
