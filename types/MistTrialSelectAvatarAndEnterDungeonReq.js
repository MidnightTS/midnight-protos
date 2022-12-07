"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex = exports.MistTrialSelectAvatarAndEnterDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialSelectAvatarAndEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("MistTrialSelectAvatarAndEnterDungeonReq", [
            { no: 11, name: "select_avatar_index_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex },
            { no: 1, name: "select_trial_avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "enter_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "trial_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { selectAvatarIndexList: [], selectTrialAvatarIdList: [], enterPointId: 0, trialId: 0 };
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
                case /* repeated MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex select_avatar_index_list */ 11:
                    message.selectAvatarIndexList.push(exports.MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 select_trial_avatar_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectTrialAvatarIdList.push(reader.uint32());
                    else
                        message.selectTrialAvatarIdList.push(reader.uint32());
                    break;
                case /* uint32 enter_point_id */ 8:
                    message.enterPointId = reader.uint32();
                    break;
                case /* uint32 trial_id */ 5:
                    message.trialId = reader.uint32();
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
        /* repeated MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex select_avatar_index_list = 11; */
        for (let i = 0; i < message.selectAvatarIndexList.length; i++)
            exports.MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex.internalBinaryWrite(message.selectAvatarIndexList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 select_trial_avatar_id_list = 1; */
        if (message.selectTrialAvatarIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectTrialAvatarIdList.length; i++)
                writer.uint32(message.selectTrialAvatarIdList[i]);
            writer.join();
        }
        /* uint32 enter_point_id = 8; */
        if (message.enterPointId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.enterPointId);
        /* uint32 trial_id = 5; */
        if (message.trialId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.trialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialSelectAvatarAndEnterDungeonReq
 */
exports.MistTrialSelectAvatarAndEnterDungeonReq = new MistTrialSelectAvatarAndEnterDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex$Type extends runtime_5.MessageType {
    constructor() {
        super("MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex
 */
exports.MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex = new MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex$Type();
