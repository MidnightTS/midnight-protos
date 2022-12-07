"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGameplayRecommendationRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GameplayRecommendationElementReliquaryResponse_1 = require("./GameplayRecommendationElementReliquaryResponse");
const GameplayRecommendationReliquaryResponse_1 = require("./GameplayRecommendationReliquaryResponse");
const GameplayRecommendationSkillResponse_1 = require("./GameplayRecommendationSkillResponse");
// @generated message type with reflection information, may provide speed optimized methods
class GetGameplayRecommendationRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetGameplayRecommendationRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 680, name: "skill_response", kind: "message", oneof: "detail", T: () => GameplayRecommendationSkillResponse_1.GameplayRecommendationSkillResponse },
            { no: 1153, name: "reliquary_response", kind: "message", oneof: "detail", T: () => GameplayRecommendationReliquaryResponse_1.GameplayRecommendationReliquaryResponse },
            { no: 714, name: "element_reliquary_response", kind: "message", oneof: "detail", T: () => GameplayRecommendationElementReliquaryResponse_1.GameplayRecommendationElementReliquaryResponse }
        ]);
    }
    create(value) {
        const message = { retcode: 0, avatarId: 0, detail: { oneofKind: undefined } };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 avatar_id */ 15:
                    message.avatarId = reader.uint32();
                    break;
                case /* GameplayRecommendationSkillResponse skill_response */ 680:
                    message.detail = {
                        oneofKind: "skillResponse",
                        skillResponse: GameplayRecommendationSkillResponse_1.GameplayRecommendationSkillResponse.internalBinaryRead(reader, reader.uint32(), options, message.detail.skillResponse)
                    };
                    break;
                case /* GameplayRecommendationReliquaryResponse reliquary_response */ 1153:
                    message.detail = {
                        oneofKind: "reliquaryResponse",
                        reliquaryResponse: GameplayRecommendationReliquaryResponse_1.GameplayRecommendationReliquaryResponse.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquaryResponse)
                    };
                    break;
                case /* GameplayRecommendationElementReliquaryResponse element_reliquary_response */ 714:
                    message.detail = {
                        oneofKind: "elementReliquaryResponse",
                        elementReliquaryResponse: GameplayRecommendationElementReliquaryResponse_1.GameplayRecommendationElementReliquaryResponse.internalBinaryRead(reader, reader.uint32(), options, message.detail.elementReliquaryResponse)
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
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 avatar_id = 15; */
        if (message.avatarId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* GameplayRecommendationSkillResponse skill_response = 680; */
        if (message.detail.oneofKind === "skillResponse")
            GameplayRecommendationSkillResponse_1.GameplayRecommendationSkillResponse.internalBinaryWrite(message.detail.skillResponse, writer.tag(680, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GameplayRecommendationReliquaryResponse reliquary_response = 1153; */
        if (message.detail.oneofKind === "reliquaryResponse")
            GameplayRecommendationReliquaryResponse_1.GameplayRecommendationReliquaryResponse.internalBinaryWrite(message.detail.reliquaryResponse, writer.tag(1153, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GameplayRecommendationElementReliquaryResponse element_reliquary_response = 714; */
        if (message.detail.oneofKind === "elementReliquaryResponse")
            GameplayRecommendationElementReliquaryResponse_1.GameplayRecommendationElementReliquaryResponse.internalBinaryWrite(message.detail.elementReliquaryResponse, writer.tag(714, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetGameplayRecommendationRsp
 */
exports.GetGameplayRecommendationRsp = new GetGameplayRecommendationRsp$Type();
