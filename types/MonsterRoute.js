"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MonsterRoute_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterRoute = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MonsterRoute.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./RoutePoint");
const pb_1 = require("google-protobuf");
class MonsterRoute extends pb_1.Message {
    constructor(data) {
        super();
        _MonsterRoute_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _MonsterRoute_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("route_points" in data && data.route_points != undefined) {
                this.route_points = data.route_points;
            }
            if ("speed_level" in data && data.speed_level != undefined) {
                this.speed_level = data.speed_level;
            }
            if ("route_type" in data && data.route_type != undefined) {
                this.route_type = data.route_type;
            }
            if ("arrive_range" in data && data.arrive_range != undefined) {
                this.arrive_range = data.arrive_range;
            }
        }
    }
    get route_points() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.RoutePoint, 1);
    }
    set route_points(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    get speed_level() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set speed_level(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get route_type() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set route_type(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get arrive_range() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set arrive_range(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new MonsterRoute({});
        if (data.route_points != null) {
            message.route_points = data.route_points.map(item => dependency_1.RoutePoint.fromObject(item));
        }
        if (data.speed_level != null) {
            message.speed_level = data.speed_level;
        }
        if (data.route_type != null) {
            message.route_type = data.route_type;
        }
        if (data.arrive_range != null) {
            message.arrive_range = data.arrive_range;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.route_points != null) {
            data.route_points = this.route_points.map((item) => item.toObject());
        }
        if (this.speed_level != null) {
            data.speed_level = this.speed_level;
        }
        if (this.route_type != null) {
            data.route_type = this.route_type;
        }
        if (this.arrive_range != null) {
            data.arrive_range = this.arrive_range;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.route_points.length)
            writer.writeRepeatedMessage(1, this.route_points, (item) => item.serialize(writer));
        if (this.speed_level != 0)
            writer.writeUint32(2, this.speed_level);
        if (this.route_type != 0)
            writer.writeUint32(3, this.route_type);
        if (this.arrive_range != 0)
            writer.writeFloat(4, this.arrive_range);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MonsterRoute();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.route_points, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.RoutePoint.deserialize(reader), dependency_1.RoutePoint));
                    break;
                case 2:
                    message.speed_level = reader.readUint32();
                    break;
                case 3:
                    message.route_type = reader.readUint32();
                    break;
                case 4:
                    message.arrive_range = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MonsterRoute.deserialize(bytes);
    }
}
exports.MonsterRoute = MonsterRoute;
_MonsterRoute_one_of_decls = new WeakMap();