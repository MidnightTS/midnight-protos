"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPreEnterMpNotify = exports.PlayerPreEnterMpNotify_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PlayerPreEnterMpNotify.State
 */
var PlayerPreEnterMpNotify_State;
(function (PlayerPreEnterMpNotify_State) {
    /**
     * @generated from protobuf enum value: STATE_INVALID = 0;
     */
    PlayerPreEnterMpNotify_State[PlayerPreEnterMpNotify_State["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: STATE_START = 1;
     */
    PlayerPreEnterMpNotify_State[PlayerPreEnterMpNotify_State["START"] = 1] = "START";
    /**
     * @generated from protobuf enum value: STATE_TIMEOUT = 2;
     */
    PlayerPreEnterMpNotify_State[PlayerPreEnterMpNotify_State["TIMEOUT"] = 2] = "TIMEOUT";
})(PlayerPreEnterMpNotify_State = exports.PlayerPreEnterMpNotify_State || (exports.PlayerPreEnterMpNotify_State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPreEnterMpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerPreEnterMpNotify", [
            { no: 6, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "state", kind: "enum", T: () => ["PlayerPreEnterMpNotify.State", PlayerPreEnterMpNotify_State, "STATE_"] }
        ]);
    }
    create(value) {
        const message = { nickname: "", uid: 0, state: 0 };
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
                case /* string nickname */ 6:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 4:
                    message.uid = reader.uint32();
                    break;
                case /* PlayerPreEnterMpNotify.State state */ 10:
                    message.state = reader.int32();
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
        /* string nickname = 6; */
        if (message.nickname !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 4; */
        if (message.uid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.uid);
        /* PlayerPreEnterMpNotify.State state = 10; */
        if (message.state !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerPreEnterMpNotify
 */
exports.PlayerPreEnterMpNotify = new PlayerPreEnterMpNotify$Type();
