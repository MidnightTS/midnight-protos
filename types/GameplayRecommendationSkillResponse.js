"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameplayRecommendationSkillResponse = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationSkillResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("GameplayRecommendationSkillResponse", [
            { no: 1, name: "skill_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillIdList: [], skillDepotId: 0 };
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
                case /* repeated uint32 skill_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillIdList.push(reader.uint32());
                    else
                        message.skillIdList.push(reader.uint32());
                    break;
                case /* uint32 skill_depot_id */ 11:
                    message.skillDepotId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 skill_id_list = 1; */
        if (message.skillIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillIdList.length; i++)
                writer.uint32(message.skillIdList[i]);
            writer.join();
        }
        /* uint32 skill_depot_id = 11; */
        if (message.skillDepotId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GameplayRecommendationSkillResponse
 */
exports.GameplayRecommendationSkillResponse = new GameplayRecommendationSkillResponse$Type();
