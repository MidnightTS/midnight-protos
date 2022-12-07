"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutSceneBeginNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CutSceneExtraParam_1 = require("./CutSceneExtraParam");
// @generated message type with reflection information, may provide speed optimized methods
class CutSceneBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CutSceneBeginNotify", [
            { no: 14, name: "cutscene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "extra_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CutSceneExtraParam_1.CutSceneExtraParam },
            { no: 1, name: "is_wait_others", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { cutsceneId: 0, extraParamList: [], isWaitOthers: false };
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
                case /* uint32 cutscene_id */ 14:
                    message.cutsceneId = reader.uint32();
                    break;
                case /* repeated CutSceneExtraParam extra_param_list */ 13:
                    message.extraParamList.push(CutSceneExtraParam_1.CutSceneExtraParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_wait_others */ 1:
                    message.isWaitOthers = reader.bool();
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
        /* uint32 cutscene_id = 14; */
        if (message.cutsceneId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cutsceneId);
        /* repeated CutSceneExtraParam extra_param_list = 13; */
        for (let i = 0; i < message.extraParamList.length; i++)
            CutSceneExtraParam_1.CutSceneExtraParam.internalBinaryWrite(message.extraParamList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_wait_others = 1; */
        if (message.isWaitOthers !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isWaitOthers);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CutSceneBeginNotify
 */
exports.CutSceneBeginNotify = new CutSceneBeginNotify$Type();
