"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlossomBriefInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class BlossomBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BlossomBriefInfo", [
            { no: 7, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "is_guide_opened", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "circle_camp_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "monster_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "refresh_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isGuideOpened: false, rewardId: 0, resin: 0, cityId: 0, circleCampId: 0, state: 0, monsterLevel: 0, sceneId: 0, refreshId: 0 };
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
                case /* Vector pos */ 7:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* bool is_guide_opened */ 15:
                    message.isGuideOpened = reader.bool();
                    break;
                case /* uint32 reward_id */ 3:
                    message.rewardId = reader.uint32();
                    break;
                case /* uint32 resin */ 5:
                    message.resin = reader.uint32();
                    break;
                case /* uint32 city_id */ 8:
                    message.cityId = reader.uint32();
                    break;
                case /* uint32 circle_camp_id */ 10:
                    message.circleCampId = reader.uint32();
                    break;
                case /* uint32 state */ 11:
                    message.state = reader.uint32();
                    break;
                case /* uint32 monster_level */ 1:
                    message.monsterLevel = reader.uint32();
                    break;
                case /* uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 refresh_id */ 14:
                    message.refreshId = reader.uint32();
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
        /* Vector pos = 7; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_guide_opened = 15; */
        if (message.isGuideOpened !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isGuideOpened);
        /* uint32 reward_id = 3; */
        if (message.rewardId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* uint32 resin = 5; */
        if (message.resin !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.resin);
        /* uint32 city_id = 8; */
        if (message.cityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cityId);
        /* uint32 circle_camp_id = 10; */
        if (message.circleCampId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.circleCampId);
        /* uint32 state = 11; */
        if (message.state !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.state);
        /* uint32 monster_level = 1; */
        if (message.monsterLevel !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.monsterLevel);
        /* uint32 scene_id = 4; */
        if (message.sceneId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 refresh_id = 14; */
        if (message.refreshId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.refreshId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlossomBriefInfo
 */
exports.BlossomBriefInfo = new BlossomBriefInfo$Type();
